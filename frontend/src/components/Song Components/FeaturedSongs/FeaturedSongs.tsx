import type { FeaturedSongsProps } from '@/types/interfaces'


function FeaturedSongs({featured}:FeaturedSongsProps) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8'></div>
  )
}

export default FeaturedSongs