import {
  MediaPlayerToggleBtn,
  PlayPreviousButton,
  PlayNextButton,
  DynamicButton,
} from "@/components/Button Components";
import { usePlayBackControls } from "@/hooks";
import { Repeat, Shuffle } from "lucide-react";

function MediaPlayerControls() {
  const { currentSong, playPrevious, isPlaying, togglePlay, playNext } =
    usePlayBackControls();
  return (
    <div className="flex items-center justify-center gap-4 sm:gap-6">
      <DynamicButton
        size={"icon"}
        btnVariant={"ghost"}
        styles="hidden sm:inline-flex hover:text-white text-zinc-400"
        btnIcon={<Shuffle className="h-4 w-4" />}
      />
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
       <DynamicButton
        size={"icon"}
        btnVariant={"ghost"}
        styles="hidden sm:inline-flex hover:text-white text-zinc-400"
        btnIcon={<Repeat className="h-4 w-4" />}
      />
    </div>
  );
}

export default MediaPlayerControls;
