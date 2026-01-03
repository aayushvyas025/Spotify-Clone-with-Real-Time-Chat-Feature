import {  HomeSectionGridSkeleton } from '@/components/Skeleton Components'
import { withSongData } from '@/hoc'
import type { MadeForYouSectionProps } from '@/types/interfaces/Pages/PagesInterface'
import type { Song } from '@/types/type/apiData/apiData'


function MadeForYouSection({songs}:MadeForYouSectionProps) {
  
  return (
    <div>Made or You Section</div>
  )
}

export default withSongData<Song, MadeForYouSectionProps>(MadeForYouSection, {
    songsType:"madeForYouSongs",
    skeleton:HomeSectionGridSkeleton
})