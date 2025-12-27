import { AlbumInfo, Heading, Text } from "@/components";
import { applicationContent } from "@/helper";
import type { AlbumTitleProps } from "@/types/interfaces";

const { albumPageContent } = applicationContent;
const { AlbumPageHeader } = albumPageContent;

function AlbumTitle({
  title,
  artist,
  totalSongs,
  releaseYear,
}: AlbumTitleProps) {
  return (
    <div className="flex flex-col justify-end">
      <Text textType="p" text={AlbumPageHeader} styles="text-sm font-medium" />
      <Heading
        headingLevel="h1"
        title={title}
        styles="text-6xl font-bold my-4"
      />
      <AlbumInfo
        artist={artist}
        totalSongs={totalSongs}
        releaseYear={releaseYear}
      />
    </div>
  );
}

export default AlbumTitle;
