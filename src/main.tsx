import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import store from './app/store.ts'
import Header from './components/Header.tsx'
import AddTask from './components/AddTask/AddTask'
import EditTask from './components/EditTask/EditTask.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/task-add" element={<AddTask />} />
          <Route path="/task-edit/:id" element={<EditTask />} />
        </Routes>
      </Router>
      </Provider>
  </StrictMode>,
)
