import type { ReactNode } from "react";
import type { Albums, HeadingLevel, Songs, TextType } from "../type";

export interface TextComponentProps {
  textType?: TextType;
  styles?: string;
  text?: ReactNode;
}

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

export interface MusicStoreInterface {
  songs: Songs[] | undefined;
  albums: Albums[] | undefined ;
  currentAlbum: Albums | null;
  isLoading: boolean;
  error: null | string;
  fetchAlbums: () => Promise<void>;
  fetchAlbumById: (albumId: string | undefined) => Promise<void>;
}

export interface ChatStoreInterface {
  users:any[] | undefined;
  fetchAllUsers:() => Promise<void>;
  isLoading:boolean;
  error:null

}

export interface LoaderProps {
  styles?: string;
}

export interface LinkComponentProps {
  href: string;
  styles?: string;
  content?: string;
  linkIcon?: ReactNode;
  children?: ReactNode;
}

export interface HeadingProps {
  headingLevel?: HeadingLevel;
  styles?: string;
  title?: ReactNode;
  children?: ReactNode;
}

export interface AlbumSidebarProps {
  albumId: string;
  styles?: string;
  album: Albums;
}

export interface AuthProviderProps {
  children: ReactNode;
}

export interface AlbumHeaderProps {
  albumImage?: string;
  title?: string;
  artist?: string;
  totalSongs?: number;
  releaseYear?:number;
}

export interface AlbumTitleProps {
  title?: string;
  artist?: string;
  totalSongs?: number;
  releaseYear?:number;
}

export interface AlbumInfoProps {
  artist?: string;
  totalSongs?: number;
  releaseYear?:number
}

export interface AlbumTableProps {
  songs?: Songs[];
}  

export interface AlbumTableContentProps {
  song: Songs;
  index: number
}

export interface AlbumSongListsProps {
 songIndex:number;
 songImage:string;
 songTitle:string;
 songArtist:string 
 songReleased:string | undefined;
 songDuration:number 
}

export interface FriendsActivityUserProps {
  
}


