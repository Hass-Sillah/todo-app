import React, { useState, useCallback } from 'react';
import { TextInput, Button } from '@carbon/react';
import { Add } from '@carbon/icons-react';
import './ToDoInput.scss';

type TodoInputProps = {
  onAdd: (text: string) => void;
}

const TodoInput = ({ onAdd }: TodoInputProps) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (inputValue.trim()) {
        onAdd(inputValue);
        setInputValue('');
      }
    },
    [inputValue, onAdd]
  );

  return (
    <form className="todo-input__form" onSubmit={handleSubmit}>
      <TextInput
              id="todo-input"
              placeholder="Add a new task..."
              value={inputValue}
              hideLabel={true}
              onChange={handleChange} 
              labelText="Add Task"  />
      <Button hasIconOnly type="submit" size="md" className="todo-input__button" renderIcon={Add} iconDescription='Add Task'>
      </Button>
    </form>
  );
};

export default React.memo(TodoInput);
