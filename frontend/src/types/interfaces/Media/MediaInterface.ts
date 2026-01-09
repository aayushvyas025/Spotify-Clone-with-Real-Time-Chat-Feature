import type { Song } from "@/types/type/apiData/apiData";


export interface MediaPlayerBarProps {
    currentTime:number; 
    duration:number;
    handleBarControls:(value:number[]) => void

}