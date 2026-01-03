export type Song = {
  _id: string;
  title: string;
  artist: string;
  imageUrl: string;
  audioUrl: string;
  duration: number;
  albumId: string;
  createdAt?: string;
  updatedAt?: string;
};

export type Album = {
  _id: string;
  title: string;
  artist: string;
  imageUrl: string;
  releaseYear: number;
  songs: Song[];
};

export type User = {
  _id: string;
  fullName: string;
  imageUrl: string;
};