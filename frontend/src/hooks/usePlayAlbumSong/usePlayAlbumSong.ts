import { useMusicStore, usePlayerStore } from "@/store";
import type { usePlayAlbumSongInterface } from "@/types/interfaces/hooks/hooksInterface";

function usePlayAlbumSong():usePlayAlbumSongInterface{
  const { currentAlbum } = useMusicStore();
  const { playAlbum, currentSong, isPlaying, togglePlay } = usePlayerStore();
  const handleAlbumSongPlay = (idx: number): void => {
    if (!currentAlbum) return;
   if (idx < 0 || idx >= currentAlbum.songs.length) return;

    playAlbum(currentAlbum?.songs, idx);
  };
  const handlePlayAlbum = (): void => {
    if (!currentAlbum) return;

    const isCurrentAlbumPlaying = currentAlbum?.songs.some(
      (song) => song?._id === currentSong?._id
    );

    if (isCurrentAlbumPlaying) {
      if (!isPlaying) {
        togglePlay();
      } else {
        togglePlay();
      }
    } else {
      playAlbum(currentAlbum?.songs, 0);
    }
  };

  return {
    handleAlbumSongPlay,
    currentSong,
    isPlaying,
    handlePlayAlbum,
    currentAlbum,
  };
}

export default usePlayAlbumSong;
