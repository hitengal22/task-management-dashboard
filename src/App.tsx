import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from './app/store'
import { deleteTask, Task, updateTask, filterTasks, sortTasks } from './features/task/taskSlice'
import TaskList from './components/TaskList/TaskList'
import TaskFilter from './components/TaskFilter/TaskFilter'
import Footer from './components/Footer'
import { useCallback } from 'react'

const App: React.FC = () => {
  const dispatch = useDispatch()
  const tasks = useSelector((state: RootState) => state.task.filteredTasks || state.task.tasks)

  const handleDeleteTask = useCallback(
    (id: string) => {
      try {
        dispatch(deleteTask(id))
      } catch (error) {
        console.error('Error deleting task:', error)
      }
    },
    [dispatch]
  )

  const handleFilterTasks = useCallback(
    (status: string) => {
      try {
        dispatch(filterTasks(status))
      } catch (error) {
        console.error('Error filtering tasks:', error)
      }
    },
    [dispatch]
  )

  const handleSortTasks = useCallback(() => {
    try {
      dispatch(sortTasks())
    } catch (error) {
      console.error('Error sorting tasks:', error)
    }
  }, [dispatch])

  return (
    <>
      <div>
        <main className="p-4 min-h-[calc(100vh-8rem)] bg-gray-100">
          <TaskFilter onFilter={handleFilterTasks} onSort={handleSortTasks} />
          <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
