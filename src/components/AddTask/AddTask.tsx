import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../features/task/taskSlice';
import Button from '../Button';
import Label from '../Label';
import Input from '../Input';

interface FormData {
    taskName: string;
    description: string;
    dueDate: string;
}

const AddTask: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        taskName: '',
        description: '',
        dueDate: '',
    });

    const [error, setError] = useState<string>('');
    const [success, setSuccess] = useState<string>(''); // State for success message
    const dispatch = useDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.taskName || !formData.description || !formData.dueDate) {
            setError('All fields are required.');
            return;
        }
        setError('');
        dispatch(addTask({ ...formData, status: 'To Do' })); // Include default status
        setFormData({ taskName: '', description: '', dueDate: '' });
        setSuccess('Task added successfully!'); // Set success message
        setTimeout(() => setSuccess(''), 3000); // Clear success message after 3 seconds
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] bg-gray-100">
            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
                <h1 className="text-2xl font-bold text-space-cadet mb-4 text-center">Add Task</h1>
                {success && (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative text-sm mb-4">
                        <span className="block sm:inline">{success}</span>
                    </div>
                )}
                <form className="space-y-4" onSubmit={handleSubmit}>
                    {error && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-sm mb-4">
                            <span className="block sm:inline">{error}</span>
                        </div>
                    )}
                    <div>
                        <Label>
                            Task Name:
                        </Label>
                        <Input
                            type="text"
                            name="taskName"
                            value={formData.taskName}
                            handleChange={handleChange}
                        />
                    </div>
                    <div>
                        <Label>
                            Description:
                        </Label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-space-cadet"
                        ></textarea>
                    </div>
                    <div>
                        <Label>
                            Due Date:
                        </Label>
                        <Input
                            type="date"
                            name="dueDate"
                            value={formData.dueDate}
                            handleChange={handleChange}
                        />
                    </div>
                    <Button
                        type="submit"
                        className="w-full"
                    >
                        Add Task
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default AddTask;
