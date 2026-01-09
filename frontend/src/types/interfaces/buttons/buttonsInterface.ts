import type { Song } from "@/types/type/apiData/apiData";
import type { ReactNode } from "react";
import type { ButtonProps } from "@/components/ui/button";

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

export interface DynamicButtonProps {
  styles?: string;
  onClickHandler?: () => void;
  btnVariant:ButtonProps['variant'];
  btnIcon?: ReactNode;
}

