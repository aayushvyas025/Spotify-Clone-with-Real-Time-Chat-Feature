import type { SongsKey } from "@/types/type/Helper/helperType";
import type React from "react";

export interface WithSongDataOptions {
  songsType: SongsKey;
  skeleton: React.ComponentType;
}

export interface InjectedSongsProps<T> {
  songs: T[];
}