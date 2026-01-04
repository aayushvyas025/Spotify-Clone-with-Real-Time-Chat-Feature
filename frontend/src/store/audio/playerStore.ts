import type { PlayerStoreInterface } from "@/types/interfaces/store/storeInterface";
import type { Song } from "@/types/type/apiData/apiData";
import { create } from "zustand";

const usePlayerStore = create<PlayerStoreInterface>((set, get) => ({
  currentSong: null,
  isPlaying: false,
  songQueue: [],
  currentIndex: -1,
  initialQueue: (songs: Song[]) => {
    set({
      songQueue: songs,
      currentSong: get().currentSong || songs[0],
      currentIndex: get().currentIndex === -1 ? 0 : get().currentIndex,
    });
  },
  playAlbum: (songs: Song[], currentIndex = 0) => {
    if (songs.length === 0) return;
    const song = songs[currentIndex];
    set({
      songQueue: songs,
      currentSong: song,
      currentIndex: get().currentIndex,
      isPlaying: true,
    });
  },
  setCurrentSong: (song: Song | null) => {
    if (!song) return;
    const songIndex = get().songQueue.findIndex((s) => s._id === song._id);
    set({
      currentSong: song,
      currentIndex: songIndex !== -1 ? songIndex : get().currentIndex,
      isPlaying: true,
    });
  },
  togglePlay: () => {
    const willStartPlaying = !get().isPlaying;
    set({
      isPlaying: willStartPlaying,
    });
  },
  playNext: () => {
    const { currentIndex, songQueue } = get();
    const nextIndex = currentIndex + 1;

    if (nextIndex < songQueue.length) {
      const nextSong = songQueue[nextIndex];
      set({ currentSong: nextSong, currentIndex: nextIndex, isPlaying: true });
    } else {
      set({ isPlaying: false });
    }
  },
  playPrevious: () => {
    const { currentIndex, songQueue } = get();
    const prevIndex = currentIndex - 1;

    if (prevIndex >= 0) {
      const prevSong = songQueue[prevIndex];
      set({ currentSong: prevSong, currentIndex: prevIndex, isPlaying: true });
    } else {
      set({ isPlaying: false });
    }
  },
}));

export default usePlayerStore;
