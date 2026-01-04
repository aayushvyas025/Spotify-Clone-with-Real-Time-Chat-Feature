import type { Album, Song } from "@/types/type/apiData/apiData";
import { useUser } from "@clerk/clerk-react";

export  interface usePlayAlbumSongInterface  {
currentAlbum: Album | null;
  currentSong: Song | null;
  isPlaying: boolean;
  handleAlbumSongPlay: (index: number) => void;
  handlePlayAlbum: () => void;
} 

export interface useFetchUserAuthInterface {
   isLoaded: boolean;
  user: ReturnType<typeof useUser>["user"]| null | undefined;
  syncUser: () => Promise<boolean | undefined>;
}

export interface UseGetAuthTokenInterface {
  initAuth: () => Promise<void>;
  loading: boolean;
}

export interface SyncUserPayload {
  id: string;
  firstName: string | null;
  lastName: string | null;
  imageUrl: string;
}

export interface SyncUserResponse {
  success: boolean;
  message?: string;
}

