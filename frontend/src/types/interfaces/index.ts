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
  songs: Songs[];
  albums: Albums[];
  currentAlbum: null | Albums;
  isLoading: boolean;
  error: null | string;
  fetchAlbums: () => Promise<void>;
  fetchAlbumById: (albumId: string | undefined) => Promise<void>;
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
  albumImage: string | undefined;
  title: string | undefined;
  artist: string | undefined;
  totalSongs: number | undefined;
  releaseYear:number | undefined
}

export interface AlbumTitleProps {
  title: string | undefined;
  artist: string | undefined;
  totalSongs: number | undefined;
  releaseYear:number | undefined
}

export interface AlbumInfoProps {
  artist: string | undefined;
  totalSongs: number | undefined;
  releaseYear:number | undefined
}
