import React, { useState } from 'react';
import { useRouter } from "next/router";
import { UserType } from '../types/UserType';
import { registerUser } from '../firebase/auth';
import { startSession } from '../firebase/session';
import RegistrationForm from '../components/registration';



function Registration() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    registerUser(email, password)
      .then((user: UserType) => {
        console.log('Пользователь зарегистрирован:', user);
        startSession(user);
        router.push("/");
      })
      .catch((error: Error) => {
        console.error('Ошибка при регистрации:', error);
      });
  };

  const handleGoogleRegistration = () => {
    // Обработчик нажатия на кнопку "Регистрация с помощью Google"
    // Ваш код обработки регистрации с помощью Google здесь
  };

  return (
    <React.Fragment>
      <h1>Регистрация</h1>
      <RegistrationForm 
        handleRegistration={handleRegistration}
        handleGoogleRegistration={handleGoogleRegistration}
        setEmail={setEmail}
        setPassword={setPassword}
      />
    </React.Fragment>
  );
}

export default Registration;