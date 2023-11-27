import React, { useState, ChangeEvent, useRef } from 'react';
import styles from './uploadtrack.module.css';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


/* function AuthStateListener() {
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Пользователь вошел
        console.log('Пользователь вошел:', user);
        // Ваш код для обработки входа пользователя, если нужно
      } else {
        // Пользователь вышел
        console.log('Пользователь вышел');
        // Ваш код для обработки выхода пользователя, если нужно
      }
    }); 

    return () => {
      unsubscribe();
    };
  }, []);

  return null;
}  */



interface UploadTrackProps {
  trackName: string;
  artistName: string;
  genre: string;
  trackFile: File | null;
  onTrackNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onArtistNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onGenreChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onTrackFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onUpload: () => void;
}

export default function UploadTrackСomponent(props: UploadTrackProps) { 
  const [showModal, setShowModal] = useState(false);

  const [tags, setTags] = useState<string[]>(['Techno']);
  const [trackName, setTrackName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [artwork, setArtwork] = useState<File | null>(null);
  const [genre, setGenre] = useState<string>('choose-genre');

  const artworkInputRef = useRef<HTMLInputElement>(null);

  const handleAddTag = () => {
    const newTag = prompt('Enter a new tag');
    if (newTag) {
      setTags([...tags, newTag]);
    }
  };

  const handleAudioFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setAudioFile(file || null);
  };

  const handleArtworkUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setArtwork(file || null);
  };

  const handleUpload = () => {
    console.log('Функция handleUpload выполняется'); 

    // Проверяем, аутентифицирован ли пользователь
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      // Пользователь не вошел в систему, вы можете показать сообщение или перенаправить пользователя на страницу входа
      console.log("Вы не вошли в аккаунт");
      return;
    }

    else {
      // Пользователь не вошел в аккаунт, предлагаем войти
      setShowModal(true);

    }

    if (audioFile && artwork) {
      const storage = getStorage();
      const db = getFirestore();
      const user = getAuth().currentUser;
  
      if (user) {
        const storageRef = ref(storage, 'tracks');
        const audioRef = ref(storageRef, `${user.uid}/${audioFile.name}`);
        const artworkRef = ref(storageRef, `${user.uid}/${artwork.name}`);
  
        Promise.all([
          uploadBytes(audioRef, audioFile),
          uploadBytes(artworkRef, artwork)
        ])
          .then((snapshot) => {
            const audioDownloadURL = getDownloadURL(snapshot[0].ref);
            const artworkDownloadURL = getDownloadURL(snapshot[1].ref);
  
            Promise.all([audioDownloadURL, artworkDownloadURL])
              .then(([audioURL, artworkURL]) => {
                const trackData = {
                  trackName,
                  tags,
                  description,
                  genre,
                  audioURL,
                  artworkURL
                };
  
                addDoc(collection(db, 'tracks'), trackData)
                  .then(() => {
                    console.log('Трек успешно загружен!');
                    props.onUpload(); // вызов функции onUpload
                  })
                  .catch((error) => {
                    console.error('Ошибка при загрузке трека:', error);
                  });
              })
              .catch((error) => {
                console.error('Ошибка при получении URL-адресов для загрузки:', error);
              });
          })
          .catch((error) => {
            console.error('Ошибка при загрузке файлов:', error);
          });

          if (audioFile && artwork) {
      } else {
        if (!audioFile && !artwork) {
          alert('Пожалуйста, загрузите аудио и изображение.');
        } else if (!audioFile) {
          alert('Пожалуйста, загрузите аудио.');
        } else if (!artwork) {
          alert('Пожалуйста, загрузите изображение.');
        }
        return;
      }
    }
    }
  };

  const handleLogin = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // Успешный вход в аккаунт
        // Далее можете выполнить необходимые действия после входа в аккаунт
        handleUpload();
      })
      .catch((error) => {
        console.error('Ошибка при входе в аккаунт:', error);
      });
  };
  

  

  return (
    <div className={styles['main-container']}>
      <div className={`${styles['artwork-upload']} ${styles['image-upload']}`} onClick={() => artworkInputRef.current?.click()}>
        {artwork ? (
          <img src={URL.createObjectURL(artwork)} alt="Artwork" />
        ) : (
          <span>Drop or click to upload artwork</span>
        )}
        <input
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handleArtworkUpload}
          ref={artworkInputRef}
        />
      </div>
      <div className={styles['list-view']}>
        <div className={styles['view-group']}>
          {tags.map((tag, index) => (
            <div key={index} className={styles['add-new-tag']}>
              <span className={styles['tag-label']}>{tag}</span>
            </div>
          ))}
          <div className={styles['button-add-new-tag']}>

          <button className={styles['tag-button']} onClick={handleAddTag}>
              Add new tag
            </button>
          </div>
        </div>
        <div className={styles['div-input-enter-track-name']}>
          <input
            className={styles['track-name-input']}
            placeholder="Enter track name"
            value={trackName}
            onChange={(e) => setTrackName(e.target.value)}
          />
        </div>
        <div className={styles['div-input-enter-description']}>
          <textarea
            className={styles['description-input']}
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className={styles['button-attach-audio']}>
          <label className={styles['audio-upload-button']}>
            {audioFile ? audioFile.name : 'Attach audio file (44100khz, 24bit)'}
            <input
              type="file"
              accept="audio/wav"
              style={{ display: 'none' }}
              onChange={handleAudioFileUpload}
            />
          </label>
        </div>
        <div className={styles['auto-layer-row']}>
          <div className={styles['input-enter-remix-artist']}>
            <input className={styles['remix-artist-input']} placeholder="Enter remix artist" />
          </div>
          <div className={styles['drop-list-choose-genre']}>
            <select
              className={styles['genre-select']}
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
            >
              <option value="choose-genre">Choose Genre</option>
              <option value="genre-1">Genre 1</option>
              <option value="genre-2">Genre 2</option>
            </select>
          </div>
        </div>
        <div className={styles['auto-layer-row-1']}>
          <div className={styles['set-a-release-date']}>
            <button className={styles['release-date-button']}>
              Choose date of release
            </button>
          </div>
          <div className={styles['button-upload']}>
            <button className={styles.upload} onClick={handleUpload}>
              Upload
            </button>
          </div>
          
          // Код для рендеринга сообщения о входе в аккаунт
        <div>
          <p>Вы не вошли в аккаунт. Пожалуйста, войдите в аккаунт, чтобы загрузить трек.</p>
          <button onClick={handleLogin}>Войти в аккаунт</button>
          {showModal && (
        // Модальное окно
        <div className="modal">
          <div className="modal-content">
            <p>Для загрузки, пожалуйста, войдите в аккаунт.</p>
            <a href="log-in-page.html">Войти</a>
            <button onClick={() => setShowModal(false)}>Закрыть</button>
          </div>
        </div>
      )}
          
        </div>
        
        </div>
      </div>
    </div>
  );
}

