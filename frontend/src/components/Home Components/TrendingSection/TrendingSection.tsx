import { HomeSectionGridSkeleton } from "@/components/Skeleton Components"
import  { withSongData } from "@/hoc"
import type { TrendingSectionProps } from "@/types/interfaces/Pages/PagesInterface"
import type { Song } from "@/types/type/apiData/apiData"
import { HeroSectionGrid } from "@/components/Home Components"
import { applicationContent } from "@/helper"

const {homePageContent} = applicationContent; 
const {trendingSection} = homePageContent;
const {title} = trendingSection

function TrendingSection({songs}:TrendingSectionProps) {
  return <div className="p-4 sm:p-6">

    <HeroSectionGrid title={title} songs={songs} />
  </div>
}

export default withSongData<Song, TrendingSectionProps>(TrendingSection,{
  songsType:"trendingSongs",
  skeleton:HomeSectionGridSkeleton
})