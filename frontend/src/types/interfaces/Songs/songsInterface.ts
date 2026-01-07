import type { Song } from "@/types/type/apiData/apiData";

export interface FeaturedSongsProps {
  featured:Song[]
}

export interface SongComponentProps {
  song:Song,
} 

export interface GridSongsProps {
  song:Song
} 

export interface PlayBackSongInfoProp {
  song:Song | null; 
}