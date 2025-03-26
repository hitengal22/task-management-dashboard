import { Task } from "../features/task/taskSlice";
import { useNavigate } from "react-router-dom";

interface CardProps {
  task: Task;
  handleDragStart: (e: React.DragEvent<HTMLDivElement>, task: Task) => void;
  onDeleteTask: (id: string) => void;
}

const Card: React.FC<CardProps> = ({ task, handleDragStart, onDeleteTask }) => {
  const navigate = useNavigate();

  return (
    <div
      className="p-4 mb-4 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105"
      style={{
        background: 'linear-gradient(135deg, rgb(255, 169, 231), rgb(255, 200, 250))',
        color: 'rgb(42, 45, 67)',
      }}
      draggable
      onDragStart={(e) => handleDragStart(e, task)}
    >
      <h4 className="font-bold text-lg mb-2">{task.taskName}</h4>
      <p className="text-sm mb-3">{task.description}</p>
      <p className="text-xs text-gray-700 mb-4 italic">Due: {task.dueDate}</p>
      <div className="flex justify-end space-x-3">
        <button
          className="px-3 py-1 text-sm font-semibold text-red-600 bg-red-100 rounded hover:bg-red-200 transition-colors"
          onClick={() => onDeleteTask(task.id)}
        >
          Delete
        </button>
        <button
          className="px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded hover:bg-blue-200 transition-colors"
          onClick={() => navigate(`/task-edit/${task.id}`)}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default Card;