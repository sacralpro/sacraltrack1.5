import React, { useEffect, useState } from "react";
import {
  getStorage,
  ref,
  listAll,
  getDownloadURL,
} from "firebase/storage";
import TrackCard from "../components/trackcard"; // Импортируем компонент карточки трека

// marketplace.tsx
interface MarketplaceProps {
  // остальные определения свойств...
  isPlaying: boolean | undefined | null;
}

interface Track {
  id: string;
  title: string;
  artist: string;
  imageUrl?: string;
  audioUrl: string;
}

const initialTracks: Track[] = [];

const Marketplace: React.FC = () => {
  const [tracks, setTracks] = useState<Track[]>(initialTracks);
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [loading, setLoading] = useState(true); // Добавляем состояние загрузки

  // Загрузка треков из Firebase Storage при монтировании компонента
  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const storage = getStorage();
        const storageRef = ref(storage);
        const tracksRef = ref(storageRef, "tracks");
        const trackList = await listAll(tracksRef);
    
        const trackPromises = trackList.items.map(async (item) => {
          const audioUrl = await getDownloadURL(item); // Получаем ссылку для аудиофайла .wav
    
          return {
            id: item.name,
          title: item.name,
          artist: "Unknown Artist",
          imageUrl: "", // Здесь можно добавить URL изображения, если он доступен
          audioUrl: audioUrl, // Используем ссылку для загрузки аудиофайла .wav
          };
        });
  

        const tracksData = await Promise.all(trackPromises);
        setTracks(tracksData);
        setLoading(false); // Устанавливаем состояние загрузки в "false" после получения данных
      } catch (error) {
        // Обработка ошибок, например, отображение сообщения об ошибке
        console.error("Error fetching tracks:", error);
        setLoading(false); // В случае ошибки также устанавливаем состояние загрузки в "false"
      }

    };

    fetchTracks();
  }, []);

  const handlePlayPause = (track: Track) => {
    if (currentTrack && currentTrack.id === track.id) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentTrack(track);
      setIsPlaying(true);
    }
  };

  const handleBuy = (track: Track) => {
    // Реализация функции "Добавить в корзину"
    // Например, вызов функции или отправка данных в корзину
    console.log("Track added to cart:", track);
  };

  if (loading) {
    return <div>Loading tracks...</div>; // Отображение индикатора загрузки
  }

  return (
    <div>
      {tracks.map((track) => (
        // Здесь перенаправляем отображение треков в импортированный компонент карточки трека
        
        <TrackCard
          key={track.id}
          track={track}
          onPlayPause={handlePlayPause}
          onBuy={handleBuy}
          isPlaying={currentTrack && currentTrack.id === track.id && isPlaying}
        />
      ))}
      {currentTrack && (
        <div>
          <img src={currentTrack.imageUrl} alt={currentTrack.title} />
          <h3>{currentTrack.title}</h3>
          <p>{currentTrack.artist}</p>
          <audio src={currentTrack.audioUrl} controls={true} autoPlay={isPlaying} />
        </div>
      )}
      
    </div>
    
  );
};

export default Marketplace;
