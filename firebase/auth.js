import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, collection, addDoc, doc, getDoc } from "firebase/firestore";

// Регистрация нового пользователя
export function registerUser(email, password) {
  const auth = getAuth();
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Успешно зарегистрирован новый пользователь
      const user = userCredential.user;
      console.log('Новый пользователь:', user);

      // Записываем пользователя в базу данных Firestore
      const db = getFirestore();
      const usersCollection = collection(db, "users");
      addDoc(usersCollection, {
        email: user.email,
        // Другие данные пользователя, которые вы хотите сохранить
      }).then((docRef) => {
        console.log('Пользователь добавлен в Firestore, ID документа:', docRef.id);
      }).catch((error) => {
        console.error('Ошибка при добавлении пользователя в Firestore:', error);
      });

      return user;
    })
    .catch((error) => {
      // Произошла ошибка при регистрации пользователя
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Ошибка:', errorCode, errorMessage);
      throw error;
    });
}

// Вход пользователя
export async function login(email, password) {
  const auth = getAuth();
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    // Успешный вход пользователя
    const user = userCredential.user;
    console.log('Пользователь вошел:', user);

    // Получаем информацию о пользователе из базы данных Firestore
    const db = getFirestore();
    const usersCollection = collection(db, "users");
    const userDoc = doc(usersCollection, user.uid);
    const userSnapshot = await getDoc(userDoc);

    if (userSnapshot.exists()) {
      const userData = userSnapshot.data();
      // Используйте полученные данные о пользователе
      console.log('Данные пользователя:', userData);
    } else {
      console.log('Пользовательские данные не найдены');
    }

    return user;
  } catch (error) {
    // Произошла ошибка при входе пользователя
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error('Ошибка:', errorCode, errorMessage);
    throw error;
  }
}

// Выход пользователя
export function logout() {
  const auth = getAuth();
  return signOut(auth)
    .then(() => {
      // Пользователь вышел
      console.log('Пользователь вышел');
    })
    .catch((error) => {
      // Произошла ошибка при выходе пользователя
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Ошибка:', errorCode, errorMessage);
      throw error;
    });
}

// Другие функции для управления аутентификацией пользователей...