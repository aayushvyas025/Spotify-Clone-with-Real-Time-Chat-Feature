import {  HomeSectionGridSkeleton } from '@/components/Skeleton Components'
import { HeroSectionGrid } from '@/components/Home Components'
import { withSongData } from '@/hoc'
import type { MadeForYouSectionProps } from '@/types/interfaces/Pages/PagesInterface'
import type { Song } from '@/types/type/apiData/apiData'
import { applicationContent } from '@/helper'

const {homePageContent} = applicationContent; 
const {madeForYouSection} = homePageContent;
const {title} = madeForYouSection;

function MadeForYouSection({songs}:MadeForYouSectionProps) {
  
  return <HeroSectionGrid title={title}  songs={songs} />
}

export default withSongData<Song, MadeForYouSectionProps>(MadeForYouSection, {
    songsType:"madeForYouSongs",
    skeleton:HomeSectionGridSkeleton
})