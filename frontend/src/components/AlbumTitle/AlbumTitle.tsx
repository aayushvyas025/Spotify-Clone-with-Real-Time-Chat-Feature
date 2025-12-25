import {AlbumInfo, Heading, PlayButtonComponent, Text} from "@/components"
import type { AlbumTitleProps } from '@/types/interfaces'

function AlbumTitle({title, artist, totalSongs, releaseYear}:AlbumTitleProps) {
  return (
    <div className='flex flex-col justify-end'>
        <Text textType='p' text='Album' styles='text-sm font-medium' />
        <Heading headingLevel='h1' title={title} styles='text-6xl font-bold my-4' />
        <AlbumInfo artist={artist} totalSongs={totalSongs} releaseYear={releaseYear} />
    </div>
  )
}

export default AlbumTitle