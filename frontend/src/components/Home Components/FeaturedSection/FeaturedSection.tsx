import { Heading } from "@/components/Helper Components";
import {FeatureSectionSkeleton } from "@/components/Skeleton Components";
import { FeaturedSongs } from "@/components/Song Components";
import  { withSongData } from "@/hoc";
import type { FeaturedSectionProps } from "@/types/interfaces/Pages/PagesInterface";



function FeaturedSection({songs}:FeaturedSectionProps) {
  
  return <div className="p-4 sm:p-6">
    <Heading headingLevel="h1" title="Good Afternoon" styles="text-2xl sm:text-3xl font-bold mb-6" />
      <FeaturedSongs  featured={songs} /> 
  </div>;
}

export default withSongData(FeaturedSection,{
  songsType:"featuredSongs", 
  skeleton:FeatureSectionSkeleton
});
