import React, { useEffect, useState } from "react";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import axios from 'axios';

interface Track {
  id: string;
  title: string;
  artist: string;
  imageUrl?: string;
  audioUrl: string;
}

const initialTracks: Track[] = [
  {
    id: "1",
    title: "Track 1",
    artist: "Artist 1",
    audioUrl: "",
  },
  {
    id: "2",
    title: "Track 2",
    artist: "Artist 2",
    audioUrl: "",
  },
  // Add more initial tracks here
];

const Marketplace: React.FC = () => {
  const [tracks, setTracks] = useState<Track[]>(initialTracks);
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(null);

  const options = {
    method: 'GET',
    url: 'https://spotify23.p.rapidapi.com/tracks/',
    params: {
      ids: '4WNcduiCmDNfmTEz7JvmLv'
    },
    headers: {
      'X-RapidAPI-Key': 'b86b4a1c60msh15aa7380a612681p1990bejsn385e63344ab6',
      'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
  };

  const fetchTracks = async () => {
    try {
      const response = await axios.request(options);
      console.log(response.data);

      // Map the fetched data to the Track interface
      const fetchedTracks: Track[] = response.data.tracks.map((track: any) => ({
        id: track.id,
        title: track.name,
        artist: track.artists[0].name,
        audioUrl: track.preview_url,
        imageUrl: track.album.images[0].url,
      }));

      setTracks(fetchedTracks);
      setCurrentTrack(fetchedTracks[0]);
      setIsPlaying(true);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTracks();
  }, []);

  useEffect(() => {
    if (currentTrack) {
      const audio = new Audio(currentTrack.audioUrl);
      setAudioElement(audio);
    }
  }, [currentTrack]);

  useEffect(() => {
    if (audioElement) {
      if (isPlaying) {
        audioElement.play();
      } else {
        audioElement.pause();
      }
    }
  }, [isPlaying, audioElement]);

  const handlePlayPause = (track: Track) => {
    if (currentTrack && currentTrack.id === track.id) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentTrack(track);
      setIsPlaying(true);
    }
  };

  const handleBuy = (track: Track) => {
    // Add track to cart or perform any other buy-related action
  };

  return (
    <div>
      {tracks.map((track) => (
        <div key={track.id}>
          <img src={track.imageUrl} alt={track.title} />
          <h3>{track.title}</h3>
          <p>{track.artist}</p>
          <button onClick={() => handlePlayPause(track)}>
            {currentTrack && currentTrack.id === track.id && isPlaying ? "Pause" : "Play"}
          </button>
          <button onClick={() => handleBuy(track)}>Buy</button>
          <audio ref={(element) => setAudioElement(element)} src={track.audioUrl} />
        </div>
      ))}
    </div>
  );
};

export default Marketplace;