import { useMusicStore, usePlayerStore } from "@/store";

function usePlayAlbumSong() {
  const { currentAlbum } = useMusicStore();
  const { playAlbum, currentSong, isPlaying, togglePlay } = usePlayerStore();
  const handleAlbumSongPlay= (idx: number): void => {
    if (!currentAlbum) return;
    playAlbum(currentAlbum?.songs, idx);
  };
  const handlePlayAlbum = (): void => {
    if (!currentAlbum) return;

    const isCurrentAlbumPlaying = currentAlbum?.songs.some(
      (song) => song?._id === currentSong?._id
    );

    if (isCurrentAlbumPlaying) {
      togglePlay();
    } else {
        playAlbum(currentAlbum?.songs, 0)
    }
  };

  return { handleAlbumSongPlay, currentSong, isPlaying, handlePlayAlbum };
}

export default usePlayAlbumSong;
