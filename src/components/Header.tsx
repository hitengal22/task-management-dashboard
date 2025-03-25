import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <div>
            <div className='flex w-full'>
                <div className='bg-linear-90 from-primary to-secondary w-1/6 background-clip'></div>
                <header className="bg-linear-90 from-secondary to-primary w-full -ml-8 background-clip-reverse p-4 text-center">
                    <h1 className="text-space-cadet bg-clip-text font-bold text-2xl m-0">Task Management Dashboard</h1>
                </header>
            </div>
            <nav>
                <ul className="flex justify-start w-1/6">
                    <li className="p-4"><Link to="/">Home</Link></li>
                    <li className="p-4"><Link to="/task-add">Add Task</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
