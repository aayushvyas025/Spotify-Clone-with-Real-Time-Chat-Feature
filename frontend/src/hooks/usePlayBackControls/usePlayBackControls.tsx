import { usePlayerStore } from "@/store";
import { useEffect, useRef, useState } from "react";

function usePlayBackControls() {
  const [volume, setVolume] = useState(75);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const { currentSong, isPlaying, togglePlay, playNext, playPrevious } =
    usePlayerStore();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleSeek = (value: number[]) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value[0];
    }
  };

  useEffect(() => {
    audioRef.current = document.querySelector("audio");
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = (): void => setCurrentTime(audio.currentTime);
    const updateDuration = (): void => setDuration(audio.duration);
    const handleEnded = (): void => {
      usePlayerStore.setState({ isPlaying: false });
    };
    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [currentSong]);

  return {volume, duration, currentTime, setVolume, currentSong, isPlaying, togglePlay, playNext, playPrevious, audioRef};
}; 

export default usePlayBackControls; 
