import type { AlbumSongListsProps } from "@/types/interfaces";
import { Text } from "@/components";
import { Play } from "lucide-react";

function AlbumSongLists({
  songIndex,
  songImage,
  songTitle,
  songArtist,
  songReleased,
  songDuration
}: AlbumSongListsProps) {
  console.log(songIndex, songImage, songTitle);
  return (
    <>
      <div className="flex items-center justify-center">
        <Text
          textType="span"
          text={String(songIndex)}
          styles="group-hover:hidden"
        />
        <Play className="h-4 w-4 hidden group-hover:block" />
      </div>
      <div className="flex items-center gap-3">
        <img src={songImage} alt={songTitle} className="size-10" />
        <div>
          <div className="font-medium text-white">{songTitle}</div>
          <div>{songArtist}</div>
        </div>
      </div>
      <div className="flex items-center">{songReleased}</div>
       <div className="flex items-center">{songDuration}</div>
    </>
  );
}

export default AlbumSongLists;
