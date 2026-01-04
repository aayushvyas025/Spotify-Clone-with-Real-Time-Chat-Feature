import { usePlayerStore } from "@/store";
import type { UseAudioPlayerInterface } from "@/types/interfaces/hooks/hooksInterface";
import { useEffect, useRef } from "react";

function useAudioPlayer():UseAudioPlayerInterface {
  const audioRef = useRef<HTMLAudioElement>(null);
  const prevSongRef = useRef<string | null>(null);
  const { currentSong, isPlaying, playNext } = usePlayerStore();

  useEffect(() => {
    // First play & pause logic in useEffect
    if (isPlaying) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    // logic for song end
    const audio = audioRef?.current;

    const handleEnded = () => {
      playNext();
    };

    audio?.addEventListener("ended", handleEnded);
    return () => audio?.removeEventListener("ended", handleEnded);
  }, [playNext]);

  useEffect(() => {
    if (!audioRef?.current || !currentSong) return;

    const audio = audioRef?.current;
    const isSongChange = prevSongRef?.current !== currentSong?.audioUrl;
    if (isSongChange) {
      audio.src = currentSong?.audioUrl;
      audio.currentTime = 0;
      prevSongRef.current = currentSong?.audioUrl;

      if (isPlaying) audio.play();
    }
  }, [currentSong, isPlaying]);

  return {audioRef}
}

export default useAudioPlayer;