import { PlayBackSongInfo } from "@/components/Song Components";
import { MediaPlayer } from "@/components/Media Components";
import { usePlayBackControls } from "@/hooks";
import React from "react";

function PlayBackControls() {
  const { currentSong, playPrevious } = usePlayBackControls();

  return (
    <footer className="h-20 sm:h-20 bg-zinc-900 border-t border-zinc-800 px-4">
      <div className="flex justify-between items-center h-full max-w-[1080px] mx-auto">
        <PlayBackSongInfo song={currentSong} />
        <MediaPlayer playPrevious={playPrevious} isCurrentSong={currentSong} />
      </div>
    </footer>
  );
}

export default PlayBackControls;
