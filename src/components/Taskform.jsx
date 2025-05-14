import React, { useState } from 'react';

function TaskForm({ onAddTask }) {
    const [inputValue, setInputValue] = useState('');

    const addFunc = (e) => {
      e.preventDefault();
      if (inputValue!== '') {
        onAddTask(inputValue);
        setInputValue('');
      }
    };
  
    return (
      <form onSubmit={addFunc} className="task-form">
        <input
          type="text"
          placeholder="Agrega una tarea"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="Agregar">Add</button>
      </form>
    );
}

export default TaskForm;
