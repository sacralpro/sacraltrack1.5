import React, { useState } from 'react';
import styles from './registration.module.css';

interface RegistrationFormProps {
  handleRegistration: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleGoogleRegistration: () => void; // Добавляем обработчик события для регистрации с помощью Google
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({
  handleRegistration,
  handleGoogleRegistration,
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
    // Обработчик нажатия на кнопку "Log in"
    // Ваш код обработки входа здесь
  };

  const handleRegistrationClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const userData = {
      email: email,
      password: password
    };
    // Ваш код обработки регистрации здесь
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
          <button onClick={handleRegistrationClick} className={styles['text-4']}>Зарегистрироваться</button>
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
          <button onClick={handleGoogleRegistration} className={styles['google-registration-button']}>
            Регистрация с помощью Google
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;