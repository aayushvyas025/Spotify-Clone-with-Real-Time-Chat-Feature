import type { Song } from "@/types/type/apiData/apiData";

export interface MediaPlayerProps {
    isCurrentSong:Song | null; 
    playPrevious:() => void;
    isPlaying:boolean;
    togglePlay:() => void;
    playNext:() => void;
}