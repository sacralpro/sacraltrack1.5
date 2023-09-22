import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebase"; // Импортируйте объект `app` из вашего файла настройки Firebase



/*
export const createUser = async (email, password) => {
  return createUserWithEmailAndPassword(getAuth(app), email, password);
}

export const signInUser = async (email, password) => {
  return signInWithEmailAndPassword(getAuth(app), email, password);
}
*/


// Получение экземпляра Firestore
const firestore = getFirestore();

// Регистрация пользователя
const registerUser = async (email, password) => {
  try {
    const auth = getAuth();
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("User registered:", user.uid);
    return user.uid;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};

// Вход пользователя
const loginUser = async (email, password) => {
  try {
    const auth = getAuth();
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("User logged in:", user.uid);
    return user.uid;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

export { firestore, registerUser, loginUser, collection, addDoc };