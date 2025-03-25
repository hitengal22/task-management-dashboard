import React from 'react';

const AddTask: React.FC = () => {
    return (
        <div>
            <h1>Add Task</h1>
            <form>
                <label>
                    Task Name:
                    <input type="text" name="taskName" />
                </label>
                <br />
                <label>
                    Description:
                    <textarea name="description"></textarea>
                </label>
                <br />
                <button type="submit">Add Task</button>
            </form>
        </div>
    );
};

export default AddTask;
