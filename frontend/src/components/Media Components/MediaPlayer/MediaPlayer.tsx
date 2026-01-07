import {
  MediaPlayerToggleBtn,
  PlayPreviousButton,
  RepeatButton,
  ShuffleButton,
} from "@/components/Button Components";
import PlayNextButton from "@/components/Button Components/PlayNextButton/PlayNextButton";
import type { MediaPlayerProps } from "@/types/interfaces/Media/MediaInterface";

function MediaPlayer({
  isCurrentSong,
  playPrevious,
  isPlaying,
  togglePlay,
  playNext,
}: MediaPlayerProps) {
  return (
    <div className="flex flex-col items-center gap-2 flex-1 max-w-full sm:max-w-[45%]">
      <div className="flex items-center gap-4 sm:gap-6">
        <ShuffleButton />
        <PlayPreviousButton
          disable={!isCurrentSong}
          onClickHandler={playPrevious}
        />
        <MediaPlayerToggleBtn
          disable={!isCurrentSong}
          musicPlaying={isPlaying}
          onClickHandler={togglePlay}
        />
        <PlayNextButton disable={!isCurrentSong} onClickHandler={playNext} />
        <RepeatButton />
      </div>
    </div>
  );
}

export default MediaPlayer;
