import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { RootState } from '../../app/store';
import { Task, updateTask } from '../../features/task/taskSlice';
import Button from '../Button';

const EditTask: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const task = useSelector((state: RootState) =>
    state.task.tasks.find((task) => task.id === id)
  );

  const [formData, setFormData] = useState<Task | null>(null);
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');

  useEffect(() => {
    if (task) {
      setFormData(task);
    } else {
      navigate('/'); // Redirect if task not found
    }
  }, [task, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (formData) {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData || !formData.taskName || !formData.description || !formData.dueDate) {
      setError('All fields are required.');
      return;
    }
    setError('');
    dispatch(updateTask(formData));
    setSuccess('Task updated successfully!');
    setTimeout(() => {
      setSuccess('');
      navigate('/'); // Redirect to the task list after success
    }, 3000);
  };

  if (!formData) return null;

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-space-cadet mb-4 text-center">Edit Task</h1>
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
            <label className="block text-sm font-medium text-space-cadet mb-1">
              Task Name:
            </label>
            <input
              type="text"
              name="taskName"
              value={formData.taskName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-space-cadet"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-space-cadet mb-1">
              Description:
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-space-cadet"
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-space-cadet mb-1">
              Due Date:
            </label>
            <input
              type="date"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-space-cadet"
            />
          </div>
          <Button type="submit" className="w-full">
            Update Task
          </Button>
        </form>
      </div>
    </div>
  );
};

export default EditTask;
