import type { Album, Song } from "@/types/type/apiData/apiData";

export interface MusicStoreInterface {
  songs: Song[] | undefined;
  albums: Album[] | undefined ;
  madeForYouSongs:Song[] | undefined;
  featuredSongs:Song[] | undefined;
  trendingSongs:Song[] | undefined;
  currentAlbum: Album | null;
  isLoading: boolean;
  error: null | string;
  fetchAlbums: () => Promise<void>;
  fetchAlbumById: (albumId: string | undefined) => Promise<void>;
  fetchForUserSongs:() => Promise<void>;
  fetchFeaturedSongs:() => Promise<void>;
  fetchTrendingSongs:() => Promise<void>;
  fetchAllSongs:() => Promise<void>
}

export interface ChatStoreInterface {
  users:any[] | undefined;
  fetchAllUsers:() => Promise<void>;
  isLoading:boolean;
  error:null | string;

}

export interface AuthStoreInterface {
  isLoading:boolean;
  isAdmin:boolean; 
  error:null | string;
  checkAdminStatus:() => Promise<void> 
  reset:() =>void;
}

export interface PlayerStoreInterface {
 currentSong: Song | null;
 isPlaying:boolean; 
 songQueue:Song[];
 currentIndex:number;
 initialQueue:(songs:Song[]) => void; 
 playAlbum:(songs:Song[], currentIndex:number) => void; 
 setCurrentSong:(song:Song| null) => void; 
 togglePlay:() => void; 
 playNext:() => void; 
 playPrevious:() => void; 

}