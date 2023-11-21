import 'firebase/storage';

// Получение модуля storage из Firebase
const storage = firebase.storage();

export const saveAudioFileByPath = async (file, storagePath) => {
  const storageRef = storage.ref();
  const fileRef = storageRef.child(storagePath);
  return await fileRef.put(file);
};

export const getDownloadURL = async (storagePath) => {
  const storageRef = storage.ref();
  const fileRef = storageRef.child(storagePath);
  return await fileRef.getDownloadURL();
};