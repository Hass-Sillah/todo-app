import React, { useMemo } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import './ToDoList.scss'
import {Todo} from '../../App'

type TodoListProps = {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoList = ({ todos, onToggle, onDelete }: TodoListProps ) => {
  const renderedTodos = useMemo(
    () =>
      todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} />
      )),
    [todos, onToggle, onDelete]
  );

  return <ul className="todo-list">{renderedTodos}</ul>;
};

export default React.memo(TodoList);
