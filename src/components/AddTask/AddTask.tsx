import React from 'react';

const AddTask: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] bg-gray-100">
            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
                <h1 className="text-2xl font-bold text-space-cadet mb-4 text-center">Add Task</h1>
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-space-cadet mb-1">
                            Task Name:
                        </label>
                        <input
                            type="text"
                            name="taskName"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-space-cadet mb-1">
                            Description:
                        </label>
                        <textarea
                            name="description"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        ></textarea>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-space-cadet mb-1">
                            Due Date:
                        </label>
                        <input
                            type="date"
                            name="dueDate"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-space-cadet"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-linear-65 from-primary to-secondary py-2 px-4 rounded-md hover:bg-linear-35 hover:from-secondary transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer font-semibold" 
                    >
                        Add Task
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddTask;
