export interface WithSongDataOptions {
  songsType: SongsKey;
  skeleton: React.ComponentType;
}

export interface InjectedSongsProps<T> {
  songs: T[];
}