import { PlayBackSongInfo } from "@/components/Song Components";
import { MediaPlayer, MediaPlayerBar, MediaPlayerOptions } from "@/components/Media Components";
import { usePlayBackControls } from "@/hooks";
import { helperFunctions } from "@/helper";

const {songDurationFormatter} = helperFunctions;

function PlayBackControls() {
 
 return (
    <footer className="h-20 sm:h-20 bg-zinc-900 border-t border-zinc-800 px-4">
      <div className="flex justify-between items-center h-full max-w-[1080px] mx-auto">
        <PlayBackSongInfo />
        <MediaPlayer  />
        
      </div>
    </footer>
  );
}

export default PlayBackControls;
