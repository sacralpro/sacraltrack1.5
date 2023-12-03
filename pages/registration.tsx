import React, { useState } from 'react';
import { useRouter } from "next/router";
import { UserType } from '../types/UserType';
import { registerUser } from '../firebase/auth';
import { startSession } from '../firebase/session';
import RegistrationForm from '../components/registration';
import { MouseEvent } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";



function Registration() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = (event: MouseEvent<HTMLButtonElement>) => {
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

  console.log("handleRegistration:", handleRegistration);
  console.log("setEmail:", setEmail);
  console.log("setPassword:", setPassword);


  

  const handleGoogle = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log('Результат входа через Google:', result);
      // Дополнительная логика для обработки результата входа через Google
    } catch (error) {
      console.error('Ошибка входа через Google:', error);
    }
  };

  console.log("handleRegistration:", handleRegistration);
  console.log("handleGoogle:", handleGoogle);
  console.log("setEmail:", setEmail);
  console.log("setPassword:", setPassword);


  return (
    <React.Fragment>
      <h1>Регистрация</h1>
      <RegistrationForm 
        handleRegistration={handleRegistration}
        handleGoogle={handleGoogle}
        setEmail={setEmail}
        setPassword={setPassword}
      />
    </React.Fragment>
  );
}

export default Registration;