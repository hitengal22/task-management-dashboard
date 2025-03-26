import React from 'react'
import Button from '../Button'

interface TaskFilterProps {
    onFilter: (status: string) => void
    onSort: () => void
}

const TaskFilter: React.FC<TaskFilterProps> = ({ onFilter, onSort }) => {
    return (
        <div className="flex justify-between items-center mb-4">
            <select
                className="p-2 border rounded bg-lavender-pink text-space-cadet border-primary"
                onChange={(e) => onFilter(e.target.value)}
            >
                <option value="">All</option>
                <option value="To Do">To Do</option>
                <option value="In Progress">In Progress</option>
                <option value="Done">Done</option>
            </select>
            <Button
                className="p-2 rounded"
                onClick={onSort}
            >
                Sort by Due Date
            </Button>
        </div>
    )
}

export default TaskFilter
