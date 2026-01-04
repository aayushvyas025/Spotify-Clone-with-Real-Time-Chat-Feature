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