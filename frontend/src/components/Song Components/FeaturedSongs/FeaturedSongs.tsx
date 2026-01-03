import { SongComponent } from "@/components/Song Components";
import type { FeaturedSongsProps } from "@/types/interfaces/Songs/songsInterface";


function FeaturedSongs({ featured }: FeaturedSongsProps) {
  return  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
    {
      featured.map((song) => <SongComponent key={song._id} song={song} />)
    }
  </div>
}

export default FeaturedSongs;
