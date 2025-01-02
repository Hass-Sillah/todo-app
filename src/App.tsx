import { useCallback, useEffect, useState } from 'react';
import TodoInput from './components/TodoInput/TodoInput';
import TodoList from './components/TodoList/TodoList';
import { v4 as uuidv4 } from 'uuid'; // Import UUID
import './styles/global.scss'

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

const App = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]); 

  const todoId = uuidv4();

  const addTodo = useCallback((text: string) => {
    setTodos((curTodos) => [
      ...curTodos,
      { id: todoId , text, completed: false },
    ]);
  }, [todoId]);

  const toggleComplete = useCallback(
    (id: string) => {
      setTodos((curTodos) =>
        curTodos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    },
    [setTodos]
  );

  const deleteTodo = useCallback((id: string) => {
    setTodos((curTodos) => curTodos.filter((todo) => todo.id !== id));
  }, [setTodos]);

  return (
    <div className="todo-container">
      <h1>To Do List</h1>
      <TodoInput onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleComplete} onDelete={deleteTodo} />
    </div>
  ); 
};

export default App
