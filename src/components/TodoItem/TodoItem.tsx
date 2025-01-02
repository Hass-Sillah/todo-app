import React from 'react';
import { Checkbox } from '@carbon/react';
import { TrashCan } from '@carbon/icons-react';
import {Todo} from '../../App'

type TodoItemProps = {
    todo: Todo;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
}

const TodoItem = ({ todo, onToggle, onDelete }: TodoItemProps) => (
    <li className="todo-list__item">
        <div className="todo-list__content">
            <Checkbox
                id={`todo-${todo.id}`}
                labelText={todo.text}
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
                className={todo.completed ? 'todo-list__text--completed' : ''}
            />
        </div>
        <div className="todo-list__actions">
            <TrashCan
                width={24}
                height={24}
                className="todo-list__delete-icon"
                onClick={() => onDelete(todo.id)}
                aria-label="Delete task"
            />
        </div>
    </li>
);

export default React.memo(TodoItem);
