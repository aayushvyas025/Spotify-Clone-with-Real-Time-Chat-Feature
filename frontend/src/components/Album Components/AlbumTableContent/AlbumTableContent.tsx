import type { AlbumTableContentProps } from "@/types/interfaces";
import { AlbumSongLists } from "@/components/Album Components";

function AlbumTableContent({ song, index }: AlbumTableContentProps) {
  return (
    <AlbumSongLists
      key={song._id}
      songIndex={index + 1}
      songImage={song.imageUrl}
      songTitle={song.title}
      songArtist={song.artist}
      songReleased={song?.createdAt?.split("T")[0]}
      songDuration={song.duration}
    />
  );
}

export default AlbumTableContent;
