import 'firebase/storage';

// Получение модуля storage из Firebase
const storage = firebase.storage();
const storagePath = 'tracks/' + audioFile.name; // Specify the path with the 'tracks' folder

export const saveAudioFileByPath = async (file, storagePath) => {
  const storageRef = storage.ref();
  const fileRef = storageRef.child(storagePath);

  console.log(fileRef.fullPath); // Print the full path of the file in the console
  
  return await fileRef.put(file);
};

export const getDownloadURL = async (storagePath) => {
  const storageRef = storage.ref();
  const fileRef = storageRef.child(storagePath);
  return await fileRef.getDownloadURL();
};