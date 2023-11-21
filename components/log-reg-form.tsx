import type { NextPage } from "next";
import styles from "./log-reg-form.module.css";
import { useState } from 'react';
import { login } from "../firebase/auth";

const LogRegForm: NextPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    login(email, password)
      .then((user) => {
        console.log('Выполняется вход пользователя');
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Пользователь вошел:', user);
        // Дополнительные действия после входа пользователя
      })
      .catch((error) => {
        console.error('Ошибка при входе пользователя:', error);
        setError('Ошибка при входе пользователя');
        // Обработка ошибки входа пользователя
      });
  };

  const handleSignUp = () => {
    console.log('Выполняется регистрация пользователя');
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className={styles.formlogreg}>
      <div className={styles.formlogregChild} />
      <div className={styles.componentLogInsignIn}>
        <div className={styles.componentLogInsignInChild} />
        <div className={styles.logIn}>Log in</div>
        <div className={styles.buttonGoogle}>
          <div className={styles.buttonGoogleChild} />
          <div className={styles.withGoogle}>with google</div>
          <img className={styles.googleIcon} alt="" src="/google.svg" />
        </div>
        <div className={styles.loginWithPhoneNomber}>
          <img
            className={styles.loginWithPhoneNomberChild}
            alt=""
            src="/rectangle-557.svg"
          />
          <div className={styles.withPhoneNomber}>with phone nomber</div>
          <div className={styles.phone}>
            <img
              className={styles.phoneChild}
              alt=""
              src="/rectangle-558.svg"
            />
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.frameItem} />
            </div>
          </div>
        </div>

        <button className={styles.logIn1} onClick={handleLogin}>
  <div className={styles.logInChild} />
  <b className={styles.logIn2}>Log in</b>
</button>
<button className={styles.signUp} onClick={handleSignUp}>
  <div className={styles.signUpChild} />
  <b className={styles.signUp1}>Sign Up</b>
</button>
<div className={styles.forgotPassword}>Forgot password?</div>
<input
  className={styles.componentLogInsignInItem}
  type="text"
  placeholder="Email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
<div className={styles.sacralTrack}>
  <div className={styles.sacralTrackChild} />
  <img className={styles.maskGroupIcon} alt="" src="/mask-group2.svg" />
  <div className={styles.logo}>
    <img className={styles.logotypeIcon} alt="" src="/logotype2.svg" />
    <h2 className={styles.sacralTrack1}>SACRAL TRACK</h2>
  </div>
</div>
</div>
<input className={styles.formlogregItem} type="text" />
<img className={styles.iconEye} alt="" src="/icon--eye.svg" />
</div>
);
};

export default LogRegForm;