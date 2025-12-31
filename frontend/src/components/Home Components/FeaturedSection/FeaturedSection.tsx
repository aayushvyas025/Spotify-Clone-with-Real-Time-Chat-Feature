import { FeaturedSongs, FeatureSectionSkeleton } from "@/components";
import  { withSongData } from "@/hoc";
import type { FeaturedSectionProps } from "@/types/interfaces";


function FeaturedSection({songs}:FeaturedSectionProps) {
  console.log(songs)
  
  return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
       {songs.map((song) => <FeaturedSongs key={song._id} featured={song} />)}
  </div>;
}

export default withSongData(FeaturedSection,{
  songsType:"featuredSongs", 
  skeleton:FeatureSectionSkeleton
});
