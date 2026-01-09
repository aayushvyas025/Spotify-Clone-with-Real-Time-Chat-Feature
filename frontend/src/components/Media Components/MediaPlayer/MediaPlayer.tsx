import {
  MediaPlayerToggleBtn,
  PlayPreviousButton,
  RepeatButton,
  ShuffleButton,
} from "@/components/Button Components";
import PlayNextButton from "@/components/Button Components/PlayNextButton/PlayNextButton";
import MediaPlayerBar from "../MediaPlayerBar/MediaPlayerBar";
import { usePlayBackControls } from "@/hooks";



function MediaPlayer() {
   const { currentSong, playPrevious, isPlaying, togglePlay, playNext, currentTime, duration, handleSeek } = usePlayBackControls();
  return (
    <div className="flex flex-col items-center gap-2 flex-1 max-w-full sm:max-w-[45%]">
      <div className="flex items-center gap-4 sm:gap-6">
        <ShuffleButton />
        <PlayPreviousButton
          disable={!currentSong}
          onClickHandler={playPrevious}
        />
        <MediaPlayerToggleBtn
          disable={!currentSong}
          musicPlaying={isPlaying}
          onClickHandler={togglePlay}
        />
        <PlayNextButton disable={!currentSong} onClickHandler={playNext} />
        <RepeatButton />
      </div>
      <MediaPlayerBar
        currentTime={currentTime}
        duration={duration}
        handleBarControls={handleSeek}
      />
    </div>
  );
}

export default MediaPlayer;
