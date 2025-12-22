export  interface MusicStoreInterface {
    songs:any[];
    albums:any[];
    isLoading:boolean;
    error: null | string;
    fetchAlbums:() => Promise<void>
} 

