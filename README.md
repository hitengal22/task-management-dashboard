# Task Management Dashboard

This project is a **Task Management Dashboard** built using **React**, **TypeScript**, and **Vite**. It allows users to manage tasks by adding, editing, deleting, filtering, and sorting them. The application uses **Redux Toolkit** for state management and **TailwindCSS** for styling.

## Features

- Add, edit, and delete tasks.
- Filter tasks by status (To Do, In Progress, Done).
- Sort tasks by due date.
- Drag-and-drop functionality to update task status.
- Persistent state using `redux-persist`.

---

## Project Setup

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd task-management
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open the application in your browser at [http://localhost:5173](http://localhost:5173).

### Build for Production

To build the project for production, run:
```bash
npm run build
```

The output will be available in the `dist` directory.

---

## Design Decisions

### 1. **State Management**
The application uses **Redux Toolkit** for managing the global state. The `taskSlice` in [`src/features/task/taskSlice.ts`](src/features/task/taskSlice.ts) handles all task-related actions, such as adding, deleting, updating, filtering, and sorting tasks. The state is persisted using `redux-persist` to ensure tasks are saved across page reloads.

### 2. **Routing**
The application uses **React Router** for navigation. Routes are defined in [`src/main.tsx`](src/main.tsx), including:
- `/` for the task list.
- `/task-add` for adding a new task.
- `/task-edit/:id` for editing an existing task.

### 3. **Styling**
The project uses **TailwindCSS** for styling. Custom utility classes and themes are defined in [`src/index.css`](src/index.css). This approach ensures a consistent and responsive design.

### 4. **Component Structure**
The project follows a modular component structure:
- **Reusable Components**: Components like `Button`, `Input`, and `Label` are designed to be reusable across the application.
- **Feature-Specific Components**: Components like `AddTask`, `EditTask`, and `TaskList` are specific to task management functionality.

### 5. **Drag-and-Drop**
The drag-and-drop functionality for updating task status is implemented in [`src/components/TaskList/TaskList.tsx`](src/components/TaskList/TaskList.tsx). It uses native HTML5 drag-and-drop APIs for simplicity and performance.

---

## License

This project is licensed under the MIT License.
