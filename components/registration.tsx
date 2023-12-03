import React, { useState } from 'react';
import 'firebase/firestore';
import styles from './registration.module.css';
import { MouseEvent } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";

interface RegistrationFormProps {
  handleRegistration: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleGoogle: () => void; // Добавляем обработчик события для регистрации с помощью Google
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({
  handleRegistration,
  handleGoogle,
  setEmail,
  setPassword,
}) => {
  const [email, setEmailState] = useState('');
  const [password, setPasswordState] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailState(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordState(e.target.value);
  };

  const handleLogin = () => {
    // ...
  };

  const handleRegistrationClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
      
    const userData = {
      email: email,
      password: password
    };
  
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, userData.email, userData.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('Пользователь зарегистрирован:', user);
        // Дополнительные действия после успешной регистрации пользователя
      })
      .catch((error) => {
        console.error('Ошибка при регистрации:', error);
        // Обработка ошибки регистрации
      });
  };

  const loginWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth();
      await signInWithPopup(auth, provider); // Используйте signInWithPopup для выполнения входа через Google
      handleGoogle(); // Обрабатываем результат входа через Google
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className={styles['main-container']}>
      <div className={styles['section']}>
        <div className={styles['pic']} />
        <span className={styles['text']}>SACRAL TRACK</span>
        <div className={styles['section-2']}>
          <span className={styles['text-2']}>
            <input type="email" value={email} onChange={handleEmailChange} placeholder="sacraltrack@gmail.com" />
          </span>
        </div>
        <div className={styles['box']}>
          <span className={styles['text-3']}>
            <input type="password" value={password} onChange={handlePasswordChange} placeholder="Введите пароль" />
          </span>
        </div>
        <div className={styles['group']}>
          <button onClick={handleRegistration} className={styles['text-4']}>Зарегистрироваться</button>
        </div>
        <span className={styles['text-5']}>
          <button onClick={handleLogin}>Войти</button>
        </span>
        <div className={styles['group-2']}>
          <div className={styles['pic-2']} />
          <div className={styles['pic-3']}>
            <span className={styles['text-6']}>с помощью номера телефона</span>
          </div>
        </div>
        <div className={styles['wrapper']}>
          <div className={styles['section-3']}>
            <div className={styles['pic-4']} />
            
            <span className={styles['text-7']}>с помощью Google</span>
          <button onClick={handleGoogle} className={styles['google-registration-button']}>
            Регистрация с помощью Google
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;