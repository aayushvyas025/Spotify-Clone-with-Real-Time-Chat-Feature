import type { AlbumInfoProps } from '@/types/interfaces'
import {Text} from "@/components/Helper Components"

function AlbumInfo({artist,totalSongs,releaseYear}:AlbumInfoProps) {
  return (
     <div className="flex items-center gap-2 text-sm text-zinc-100">
         <Text textType='span' text={artist} styles="font-medium text-white" />
         <Text textType='span' text={`• ${totalSongs} songs`} />
          <Text textType='span' text={`• ${releaseYear}`} />
        </div>
  )
}

export default AlbumInfo