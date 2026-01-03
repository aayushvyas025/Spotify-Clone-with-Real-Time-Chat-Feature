import { Heading, Text } from '@/components/Helper Components'
import type { GridSongsProps } from '@/types/interfaces/Songs/songsInterface'

function GridSongs({song}:GridSongsProps) {
  return (
    <div className='bg-zinc-800/40 p-4 rounded-md hover:bg-zinc-700/50 transition-all group cursor-pointer'>
        <div className="relative mb-4">
            <div className="aspect-square rounded-md shadow-lg overflow-hidden">
                <img src={song.imageUrl} alt={song.title} className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105' />
            </div>
        </div>
        <Heading headingLevel='h3' title={song.title} styles='font-medium mb-2 truncate' />
        <Text textType='p' styles='text-sm text-zinc-400 truncate' text={song.artist}/>
    </div>
  )
}

export default GridSongs