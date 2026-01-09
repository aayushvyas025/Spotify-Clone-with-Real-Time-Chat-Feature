import type { Album, Song } from "@/types/type/apiData/apiData";
import { useUser } from "@clerk/clerk-react";
import type { RefObject } from "react";


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

export interface UseAudioPlayerInterface {
  audioRef:RefObject<HTMLAudioElement|null>;
}

export interface UsePlayBackControlsInterface {
  audioRef:RefObject<HTMLAudioElement|null>; 
  currentTime: number;                         
  duration: number;                            
  volume: number;                             
  setVolume: (value: number) => void;        
  handleSeek: (value: number[]) => void;         
  currentSong: Song | null;                  
  isPlaying: boolean;                          
  togglePlay: () => void;                   
  playNext: () => void;                    
  playPrevious: () => void;                          
}

