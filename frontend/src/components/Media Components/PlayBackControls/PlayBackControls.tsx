import { PlayBackSongInfo } from "@/components/Song Components";
import { MediaPlayer, MediaPlayerOptions } from "@/components/Media Components";

function PlayBackControls() {
 
 return (
    <footer className="h-20 sm:h-20 bg-zinc-900 border-t border-zinc-800 px-4">
      <div className="grid grid-cols-3 items-center h-full w-full mx-auto">
        <PlayBackSongInfo />
        <MediaPlayer  />
        <MediaPlayerOptions /> 
      </div>
    </footer>
  );
}

export default PlayBackControls;
