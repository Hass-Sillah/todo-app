import { render, screen } from '@testing-library/react';
import { vi } from 'vitest'; // Vitest mock functions
import TodoList from './TodoList';
import { Todo } from '../../App';

const mockTodos: Todo[] = [
  { id: "abc", text: 'Task 1', completed: false },
  { id: "b2c", text: 'Task 2', completed: true },
];

const mockOnToggle = vi.fn();
const mockOnDelete = vi.fn();

describe('TodoList Component', () => {
  test('renders a list of todos', () => {
    render(
      <TodoList todos={mockTodos} onToggle={mockOnToggle} onDelete={mockOnDelete} />
    );

    expect(screen.getByText('Task 1')).toBeInTheDocument();
    expect(screen.getByText('Task 2')).toBeInTheDocument();

    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(2);
  });
});
