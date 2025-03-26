import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import TaskForm from '../components/TaskForm'

describe('TaskForm Component', () => {
  it('renders the form correctly', () => {
    render(<TaskForm onAddTask={jest.fn()} />)
    expect(screen.getByPlaceholderText('Task Title')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Task Description')).toBeInTheDocument()
    expect(screen.getByText('Add Task')).toBeInTheDocument()
  })

  it('calls onAddTask with correct data', () => {
    const mockAddTask = jest.fn()
    render(<TaskForm onAddTask={mockAddTask} />)

    fireEvent.change(screen.getByPlaceholderText('Task Title'), {
      target: { value: 'Test Task' },
    })
    fireEvent.change(screen.getByPlaceholderText('Task Description'), {
      target: { value: 'Test Description' },
    })
    fireEvent.click(screen.getByText('Add Task'))

    expect(mockAddTask).toHaveBeenCalledWith({
      title: 'Test Task',
      description: 'Test Description',
      status: 'To Do',
      dueDate: expect.any(String),
    })
  })
})
