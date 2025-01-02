import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest'; // Vitest mock function
import TodoItem from './TodoItem';
import { Todo } from '../../App';

const mockTodo: Todo = { id: "abc", text: 'Test Task', completed: false };
const mockOnToggle = vi.fn();
const mockOnDelete = vi.fn();

describe('TodoItem Component', () => {
  test('renders todo item with correct text and checkbox state', () => {
    render(<TodoItem todo={mockTodo} onToggle={mockOnToggle} onDelete={mockOnDelete} />);

    expect(screen.getByText('Test Task')).toBeInTheDocument();
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
  });

  test('calls onToggle when checkbox is clicked', () => {
    render(<TodoItem todo={mockTodo} onToggle={mockOnToggle} onDelete={mockOnDelete} />);

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    expect(mockOnToggle).toHaveBeenCalledWith(mockTodo.id);
  });

  test('calls onDelete when trash icon is clicked', () => {
    render(<TodoItem todo={mockTodo} onToggle={mockOnToggle} onDelete={mockOnDelete} />);

    const deleteButton = screen.getByLabelText('Delete task');
    fireEvent.click(deleteButton);

    expect(mockOnDelete).toHaveBeenCalledWith(mockTodo.id);
  });
});
