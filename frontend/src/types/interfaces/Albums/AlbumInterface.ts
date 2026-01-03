import type { Album, Song } from "@/types/type/apiData/apiData";

export interface AlbumHeaderProps {
  albumImage?: string;
  title?: string;
  artist?: string;
  totalSongs?: number;
  releaseYear?: number;
}

export interface AlbumInfoProps {
  artist?: string;
  totalSongs?: number;
  releaseYear?: number;
}

export interface AlbumSongListsProps {
 songIndex:number;
 songImage:string;
 songTitle:string;
 songArtist:string 
 songReleased:string | undefined;
 songDuration:number 
}

export interface AlbumSidebarProps {
  albumId: string;
  styles?: string;
  album: Album;
} 

export interface AlbumSidebarProps {
  albumId: string;
  styles?: string;
  album: Album;
}


export interface AlbumTableProps {
  songs?: Song[];
}   

export interface AlbumTableContentProps {
  song: Song;
  index: number
}


export interface AlbumTitleProps {
  title?: string;
  artist?: string;
  totalSongs?: number;
  releaseYear?:number;
}


export interface AlbumTableProps {
  songs?: Song[];
}  

