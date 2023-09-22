import React, { useState } from 'react';
import { UserType } from '../types/UserType';
import { registerUser } from '../firebase/auth';
// import { endSession, getSession, isLoggedIn } from '../firebase/session.js';
import { startSession } from '../firebase/session';



function Registration() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    registerUser(email, password)
  .then((user: UserType) => {
    // Регистрация успешна
    console.log('Пользователь зарегистрирован:', user);

    // Выполнение дополнительных действий после успешной регистрации
    startSession(user);
    // Дополнительные действия после успешной регистрации...
  })
  .catch((error: Error) => {
    // Произошла ошибка при регистрации
    console.error('Ошибка при регистрации:', error);

    // Дополнительные действия при ошибке регистрации...
  });
  
  };

  return (
    <div className="registration-container">
      <h1>Регистрация</h1>
      <form onSubmit={handleRegistration}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br />
        <label htmlFor="password">Пароль:</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br />
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
}

export default Registration;
