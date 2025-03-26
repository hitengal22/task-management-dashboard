import React from 'react';
import { useDispatch } from 'react-redux';
import { Task, updateTaskStatus } from '../../features/task/taskSlice';
import Card from '../Card';

interface TaskListProps {
  tasks: Task[];
  onDeleteTask: (id: string) => void;
  onUpdateTask: (task: Task) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onDeleteTask, onUpdateTask }) => {
  const dispatch = useDispatch();

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, task: Task) => {
    e.dataTransfer.setData('task', JSON.stringify(task));
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, status: string) => {
    const task = JSON.parse(e.dataTransfer.getData('task')) as Task;
    dispatch(updateTaskStatus({ id: task.id.toString(), status: status as Task['status'] }));
  };

  const allowDrop = (e: React.DragEvent<HTMLDivElement>) => e.preventDefault();

  return (
    <div className="grid grid-cols-3 gap-8">
      {['To Do', 'In Progress', 'Done'].map((status) => (
        <div
          key={status}
          className="p-6 border rounded-lg shadow-lg transition-all duration-300 bg-secondary text-white"
          style={{
            background: 'linear-gradient(135deg, rgb(65, 67, 97), rgb(85, 87, 117))',
          }}
          onDragOver={allowDrop}
          onDrop={(e) => handleDrop(e, status)}
          onDragEnter={(e) =>
            (e.currentTarget.style.background = 'linear-gradient(135deg, rgb(85, 87, 117), rgb(105, 107, 137))')
          }
          onDragLeave={(e) =>
            (e.currentTarget.style.background = 'linear-gradient(135deg, rgb(65, 67, 97), rgb(85, 87, 117))')
          }
        >
          <h3 className="text-2xl font-extrabold mb-6 underline">{status}</h3>
          {tasks
            .filter((task) => task.status === status)
            .map((task) => (
              <Card
                key={task.id}
                task={task}
                handleDragStart={handleDragStart}
                onDeleteTask={onDeleteTask}
                onUpdateTask={onUpdateTask}
              />
            ))}
        </div>
      ))}
    </div>
  );
};

export default TaskList;
