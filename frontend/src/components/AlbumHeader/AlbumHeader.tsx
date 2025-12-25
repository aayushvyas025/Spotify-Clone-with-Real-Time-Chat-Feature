import type { AlbumHeaderProps } from '@/types/interfaces'
import {AlbumTitle} from "@/components"


function AlbumHeader({title, albumImage, artist,totalSongs, releaseYear}:AlbumHeaderProps) {
  return (
    <div className='flex p-6 gap-6'>
        <img src={albumImage} alt={title} className='w-[240px] h-[240px] shadow-xl rounded' />
        <AlbumTitle title={title} artist={artist} totalSongs={totalSongs} releaseYear={releaseYear}  />
        
    </div>
  )
}

export default AlbumHeader