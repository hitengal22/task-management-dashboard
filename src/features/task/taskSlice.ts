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
  },
});

export const { addTask, deleteTask, updateTask, updateTaskStatus } = taskSlice.actions;
export default taskSlice.reducer;