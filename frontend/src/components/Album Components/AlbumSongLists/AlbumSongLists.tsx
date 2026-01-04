import { helperFunctions } from "@/helper";
import type { AlbumSongListsProps } from "@/types/interfaces/Albums/AlbumInterface";
import { usePlayAlbumSong } from "@/hooks";
import { AlbumSongPlayButton } from "@/components/Button Components";


const { songDurationFormatter } = helperFunctions;

function AlbumSongLists({
  songIndex,
  songImage,
  songTitle,
  songArtist,
  songReleased,
  songDuration,
  currentSongPlaying,
}: AlbumSongListsProps) {
  const { isPlaying } = usePlayAlbumSong();
  return (
    <>
      <AlbumSongPlayButton
        isPlaying={isPlaying}
        currentSongPlaying={currentSongPlaying}
        songIndex={songIndex}
      />
      <div className="flex items-center gap-3">
        <img src={songImage} alt={songTitle} className="size-10" />
        <div>
          <div className="font-medium text-white">{songTitle}</div>
          <div>{songArtist}</div>
        </div>
      </div>
      <div className="flex items-center">{songReleased}</div>
      <div className="flex items-center justify-center">
        {songDurationFormatter(songDuration)}
      </div>
    </>
  );
}

export default AlbumSongLists;
