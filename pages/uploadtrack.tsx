import React, { useState, ChangeEvent } from 'react';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import UploadTrackComponent from '../components/uploadtrackcomponent';

export default function UploadTrack() {
  const [trackName, setTrackName] = useState('');
  const [artistName, setArtistName] = useState('');
  const [genre, setGenre] = useState('');
  const [trackFile, setTrackFile] = useState<File | null>(null);

  const handleTrackNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTrackName(e.target.value);
  };

  const handleArtistNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setArtistName(e.target.value);
  };

  const handleGenreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGenre(e.target.value);
  };

  const handleTrackFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setTrackFile(files[0]);
    }
  };

  const handleUpload = () => {
    const auth = getAuth();
    const db = getFirestore();
    const storage = getStorage();
    const user = auth.currentUser;

    if (user && trackFile) {
      const storageRef = ref(storage);
      const trackRef = ref(storageRef, `${user.uid}/${trackFile.name}`);
      uploadBytes(trackRef, trackFile)
        .then((snapshot) => {
          console.log('Трек успешно загружен');

          getDownloadURL(snapshot.ref)
            .then((downloadURL) => {
              console.log('URL для скачивания:', downloadURL);

              const trackData = {
                trackName,
                artistName,
                genre,
                trackUrl: downloadURL,
                // artworkUrl: artworkDownloadURL, // добавление URL артворка
              };

              const tracksCollection = collection(db, 'tracks');
              addDoc(tracksCollection, {
                userId: user.uid,
                ...trackData,
              })
                .then((docRef) => {
                  console.log('Трек добавлен в базу данных, ID документа:', docRef.id);
                })
                .catch((error) => {
                  console.error('Ошибка при добавлении трека в базу данных:', error);
                });
            })
            .catch((error) => {
              console.error('Ошибка при получении URL для скачивания:', error);
            });
        })
        .catch((error) => {
          console.error('Ошибка при загрузке трека:', error);
        });
    }
  };

  return (
    <div className="container">
      <h2>Загрузить трек</h2>
      {/* Добавьте компонент UploadTrack */}
      <UploadTrackComponent
        trackName={trackName}
        artistName={artistName}
        genre={genre}
        trackFile={trackFile}
        onTrackNameChange={handleTrackNameChange}
        onArtistNameChange={handleArtistNameChange}
        onGenreChange={handleGenreChange}
        onTrackFileChange={handleTrackFileChange}
        onUpload={handleUpload}
      />
    </div>
  );
}