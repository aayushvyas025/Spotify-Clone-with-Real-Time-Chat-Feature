import type { Song } from "@/types/type/apiData/apiData";

export interface SigninButtonProps {
  buttonVariant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  styles?: string;
  text?: string;
  image?: string;
} 

export interface AlbumSongPlayButtonProps {
  isPlaying:boolean; 
  currentSongPlaying:boolean; 
  songIndex:number
}

export interface FeaturedSectionPlayButtonProps {
  song:Song
}

export interface PlayPreviousButtonProps {
  onClickHandler: () => void; 
  disable:boolean
}

export interface PlayNextButtonProps {
  onClickHandler:() => void; 
  disable:boolean
}
 
export interface MediaPlayerToggleBtnProps {
  onClickHandler:() => void;
  disable:boolean;
  musicPlaying:boolean;
}

