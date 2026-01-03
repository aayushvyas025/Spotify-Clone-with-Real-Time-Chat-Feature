import { Heading } from "@/components/Helper Components";
import { GridSongs } from "@/components/Song Components";
import { Button } from "@/components/ui/button";
import type { HomeSectionGridProps } from "@/types/interfaces/Pages/PagesInterface";

function HomeSectionGrid({ title, songs }: HomeSectionGridProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <Heading
          headingLevel="h2"
          title={title}
          styles="text-xl sm:text-2xl font-bold"
        />
        <Button
          variant={"link"}
          className="text-sm text-zinc-400 hover:text-white"
        >
          Show All
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {songs.map((song) => <GridSongs key={song._id} song={song} />)}
      </div>
    </div>
  );
}

export default HomeSectionGrid;
