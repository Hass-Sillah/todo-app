import { render, screen, fireEvent } from '@testing-library/react';
import TodoInput from './TodoInput';
import { vi } from 'vitest';

const mockOnAdd = vi.fn();

describe('TodoInput Component', () => {
  test('renders input field and button', () => {
    render(<TodoInput onAdd={mockOnAdd} />);

    const input = screen.getByPlaceholderText('Add a new task...');
    expect(input).toBeInTheDocument();

    const button = screen.getByRole('button', { name: 'Add Task' });
    expect(button).toBeInTheDocument();
  });

  test('allows user to type into input field', () => {
    render(<TodoInput onAdd={mockOnAdd} />);

    const input = screen.getByPlaceholderText('Add a new task...');
    fireEvent.change(input, { target: { value: 'New Task' } });

    expect(input).toHaveValue('New Task');
  });

  test('calls onAdd when form is submitted', () => {
    render(<TodoInput onAdd={mockOnAdd} />);

    const input = screen.getByPlaceholderText('Add a new task...');
    const button = screen.getByRole('button', { name: 'Add Task' });

    fireEvent.change(input, { target: { value: 'New Task' } });
    fireEvent.click(button);

    expect(mockOnAdd).toHaveBeenCalledTimes(1);
    expect(mockOnAdd).toHaveBeenCalledWith('New Task');
  });

});
