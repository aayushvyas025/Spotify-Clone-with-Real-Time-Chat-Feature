import { PlayBackSongInfo } from "@/components/Song Components";
import { MediaPlayer, MediaPlayerOptions } from "@/components/Media Components";
import { helperFunctions } from "@/helper";

const {songDurationFormatter} = helperFunctions;

function PlayBackControls() {
 
 return (
    <footer className="h-20 sm:h-20 bg-zinc-900 border-t border-zinc-800 px-4">
      <div className="flex justify-between items-center h-full w-full mx-auto">
        <PlayBackSongInfo />
        <MediaPlayer  />
        
      </div>
    </footer>
  );
}

export default PlayBackControls;
