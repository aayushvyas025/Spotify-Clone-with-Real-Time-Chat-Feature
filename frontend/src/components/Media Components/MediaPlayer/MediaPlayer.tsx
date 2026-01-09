import {
  MediaPlayerBar,
  MediaPlayerControls,
} from "@/components/Media Components";
import { usePlayBackControls } from "@/hooks";

function MediaPlayer() {
  const { currentTime, duration, handleSeek } = usePlayBackControls();
  return (
    <div className="flex flex-col gap-2 flex-1 w-full items-stretch">
      <MediaPlayerControls />
      <MediaPlayerBar
        currentTime={currentTime}
        duration={duration}
        handleBarControls={handleSeek}
      />
    </div>
  );
}

export default MediaPlayer;
