// src/components/TodoList.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, removeTask } from '../redux/userSlice';

function TodoList() {
  const [task, setTask] = useState('');
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task) {
      const newTask = {
        id: Date.now(),
        text: task,
      };
      dispatch(addTask(newTask)); // Aggiungi la task a Redux
      setTask('');
    }
  };

  const handleRemoveTask = (taskId) => {
    dispatch(removeTask(taskId)); // Rimuovi la task da Redux
  };

  return (
    <div>
      <h2>To-Do List di {user.name}</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Aggiungi una nuova attività"
      />
      <button onClick={handleAddTask}>Aggiungi</button>
      <ul>
        {user.todoList.map((task) => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => handleRemoveTask(task.id)}>Rimuovi</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
