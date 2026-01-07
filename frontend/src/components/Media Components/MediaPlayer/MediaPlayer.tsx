import { PlayPreviousButton, ShuffleButton } from '@/components/Button Components'
import type { MediaPlayerProps } from '@/types/interfaces/Media/MediaInterface'
import React from 'react'

function MediaPlayer({isCurrentSong, playPrevious}:MediaPlayerProps
) {
  return (
    <div className='flex flex-col items-center gap-2 flex-1 max-w-full sm:max-w-[45%]'>
        <div className="flex items-center gap-4 sm:gap-6">
            <ShuffleButton />
            <PlayPreviousButton disable={!isCurrentSong} onClickHandler={playPrevious} />
        </div>
    </div>
  )
}

export default MediaPlayer