export interface MusicStoreInterface {
  songs: Songs[] | undefined;
  albums: Albums[] | undefined ;
  madeForYouSongs:Songs[] | undefined;
  featuredSongs:Songs[] | undefined;
  trendingSongs:Songs[] | undefined;
  currentAlbum: Albums | null;
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