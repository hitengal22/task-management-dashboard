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
                className="p-2 border rounded"
                style={{
                    backgroundColor: 'rgb(255, 169, 231)',
                    color: 'rgb(42, 45, 67)',
                    borderColor: 'rgb(127, 44, 203)',
                }}
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
