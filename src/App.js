// src/App.js

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { registerUser, logoutUser } from './redux/userSlice';
import { increment, decrement } from './redux/counterslice';




function App() {
  const count = useSelector((state) => state.counter.value);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = () => {
    dispatch(registerUser({ name, email }));
    setName('');
    setEmail('');
  };

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div className="App">
      <h1>Contatore: {count}</h1>
      <button onClick={() => dispatch(increment())}>Incrementa</button>
      <button onClick={() => dispatch(decrement())}>Decrementa</button>


      <h2>Registrazione Utente</h2>
      {!user.name && !user.email ? (
        <div>
          <input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleRegister}>Registra</button>
        </div>
      ) : (
        <div>
          <h3>Utente Registrato:</h3>
          <p>Nome: {user.name}</p>
          <p>Email: {user.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default App;









