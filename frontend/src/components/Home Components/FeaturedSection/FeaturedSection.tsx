import { FeatureSectionSkeleton } from "@/components";
import  { withSongData } from "@/hoc";
import type { FeaturedSectionProps } from "@/types/interfaces";


function FeaturedSection({songs}:FeaturedSectionProps) {
  
  return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
     
  </div>;
}

export default withSongData(FeaturedSection,{
  songsType:"featuredSongs", 
  skeleton:FeatureSectionSkeleton
});
