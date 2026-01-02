import type { FeaturedSongsProps } from "@/types/interfaces";
import { SongComponent } from "@/components/Song Components";

function FeaturedSongs({ featured }: FeaturedSongsProps) {
  return  <div>
    <SongComponent song={featured} />;
  </div>
}

export default FeaturedSongs;
