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
  album: Albums;
} 

export interface AlbumSidebarProps {
  albumId: string;
  styles?: string;
  album: Albums;
}


export interface AlbumTableProps {
  songs?: Songs[];
}   

export interface AlbumTableContentProps {
  song: Songs;
  index: number
}


export interface AlbumTitleProps {
  title?: string;
  artist?: string;
  totalSongs?: number;
  releaseYear?:number;
}


export interface AlbumTableProps {
  songs?: Songs[];
}  

