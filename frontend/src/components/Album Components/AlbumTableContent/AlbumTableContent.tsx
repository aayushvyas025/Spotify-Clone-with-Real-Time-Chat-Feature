import { AlbumSongLists } from "@/components/Album Components";
import type { AlbumTableContentProps } from "@/types/interfaces/Albums/AlbumInterface";

function AlbumTableContent({ song, index, isCurrentSong }: AlbumTableContentProps) {
  return (
    <AlbumSongLists
      key={song._id}
      songIndex={index + 1}
      songImage={song.imageUrl}
      songTitle={song.title}
      songArtist={song.artist}
      songReleased={song?.createdAt?.split("T")[0]}
      songDuration={song.duration}
      currentSongPlaying={isCurrentSong}
    />
  );
}

export default AlbumTableContent;
