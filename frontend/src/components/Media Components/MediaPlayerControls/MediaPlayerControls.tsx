import { MediaPlayerToggleBtn, PlayPreviousButton, RepeatButton, ShuffleButton, PlayNextButton } from '@/components/Button Components'
import { usePlayBackControls } from '@/hooks';


function MediaPlayerControls() {
    const { currentSong, playPrevious, isPlaying, togglePlay, playNext} = usePlayBackControls();
  return (
      <div className="flex items-center justify-center gap-4 sm:gap-6">
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
  )
}

export default MediaPlayerControls