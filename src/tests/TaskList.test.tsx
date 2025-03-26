import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import TaskList from '../components/TaskList'

describe('TaskList Component', () => {
  const mockTasks = [
    { id: 1, title: 'Task 1', description: 'Description 1', status: 'To Do', dueDate: '2023-10-01' },
    { id: 2, title: 'Task 2', description: 'Description 2', status: 'In Progress', dueDate: '2023-10-02' },
  ]

  it('renders tasks correctly', () => {
    render(<TaskList tasks={mockTasks} />)
    expect(screen.getByText('Task 1')).toBeInTheDocument()
    expect(screen.getByText('Task 2')).toBeInTheDocument()
  })

  it('calls onDeleteTask when delete button is clicked', () => {
    const mockDeleteTask = jest.fn()
    render(<TaskList tasks={mockTasks} onDeleteTask={mockDeleteTask} onUpdateTask={jest.fn()} />)

    fireEvent.click(screen.getAllByText('Delete')[0])
    expect(mockDeleteTask).toHaveBeenCalledWith(1)
  })
})
