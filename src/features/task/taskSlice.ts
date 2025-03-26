import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Task {
  id: string;
  taskName: string;
  description: string;
  status: 'To Do' | 'In Progress' | 'Done';
  dueDate: string;
}

interface TaskState {
  tasks: Task[];
  filteredTasks?: Task[];
}

const initialState: TaskState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Omit<Task, 'id'>>) => {
      const newTask: Task = {
        id: Date.now().toString(),
        ...action.payload,
        status: 'To Do',
      };
      state.tasks.push(newTask);
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    updateTask: (state, action: PayloadAction<Task>) => {
      const index = state.tasks.findIndex((task) => task.id === action.payload.id);
      if (index !== -1) {
        state.tasks[index] = action.payload;
      }
    },
    updateTaskStatus: (state, action: PayloadAction<{ id: string; status: Task['status'] }>) => {
      const task = state.tasks.find((task) => task.id === action.payload.id);
      if (task) {
        task.status = action.payload.status;
      }
    },
    filterTasks: (state, action: PayloadAction<string>) => {
      if (action.payload === '') {
        state.filteredTasks = undefined;
      } else {
        state.filteredTasks = state.tasks.filter(task => task.status === action.payload);
      }
    },
    sortTasks: (state) => {
      const tasksToSort = state.filteredTasks || state.tasks;
      tasksToSort.sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime());
      if (state.filteredTasks) {
        state.filteredTasks = tasksToSort;
      } else {
        state.tasks = tasksToSort;
      }
    },
  },
});

export const { addTask, deleteTask, updateTask, updateTaskStatus, filterTasks, sortTasks } = taskSlice.actions;
export default taskSlice.reducer;