import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebase"; // Импортируйте объект `app` из вашего файла настройки Firebase


// Получение экземпляра Firestore
const firestore = getFirestore();

// Регистрация пользователя
const registerUser = async (email, password) => {
  try {
    const auth = getAuth(app);
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("User registered:", user.uid);

    // Добавляем пользователя в Firestore
    const usersCollection = collection(firestore, "userartist");
    await addDoc(usersCollection, { uid: user.uid, email });

    return user.uid;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};

// Вход пользователя
const loginUser = async (email, password) => {
  try {
    const auth = getAuth(app);
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