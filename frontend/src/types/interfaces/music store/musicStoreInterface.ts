import type { Albums, Songs } from "@/types/object types/apis types/apiInterfaces";
export  interface MusicStoreInterface {
    songs:Songs[];
    albums:Albums[];
    isLoading:boolean;
    error: null | string;
    fetchAlbums:() => Promise<void>
} 

