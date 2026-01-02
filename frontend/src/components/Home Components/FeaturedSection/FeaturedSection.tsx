import {FeatureSectionSkeleton } from "@/components/Skeleton Components";
import { FeaturedSongs } from "@/components/Song Components";
import  { withSongData } from "@/hoc";
import type { FeaturedSectionProps } from "@/types/interfaces";


function FeaturedSection({songs}:FeaturedSectionProps) {
  
  return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
       {songs.map((song) => <FeaturedSongs key={song._id} featured={song} />)}
  </div>;
}

export default withSongData(FeaturedSection,{
  songsType:"featuredSongs", 
  skeleton:FeatureSectionSkeleton
});
