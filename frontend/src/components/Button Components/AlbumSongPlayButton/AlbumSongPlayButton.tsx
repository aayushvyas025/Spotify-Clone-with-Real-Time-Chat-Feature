import { Text } from '@/components/Helper Components'
import type { AlbumSongPlayButtonProps } from '@/types/interfaces/buttons/buttonsInterface'
import { Music, Play } from 'lucide-react'

function AlbumSongPlayButton({isPlaying, currentSongPlaying, songIndex}:AlbumSongPlayButtonProps) {
  return (
     <div className="flex items-center justify-center">
        {isPlaying && currentSongPlaying ? (
          <div className="size-4 text-green-500">
            <Music />
          </div>
        ) : (
          <Text
            textType="span"
            text={songIndex}
            styles="group-hover:hidden"
          />
        )}
        {
          !currentSongPlaying && 
          <Play className="h-4 w-4 hidden group-hover:block" />
        }
      </div>
  )
}

export default AlbumSongPlayButton