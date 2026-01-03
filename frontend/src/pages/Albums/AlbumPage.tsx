import { GradientBackground } from "@/components";
import { AlbumHeader,AlbumTable } from "@/components/Album Components";
import { PlayButtonComponent } from "@/components/Button Components";
import { AlbumPageSkeleton } from "@/components/Skeleton Components";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useMusicStore } from "@/store";
import  { useEffect } from "react";
import { useParams } from "react-router-dom";

function AlbumPage() {
  const { fetchAlbumById, currentAlbum, isLoading } = useMusicStore();
  const { albumId } = useParams();

  useEffect(() => {
    if (albumId) fetchAlbumById(albumId);
  }, [albumId]);

  if (isLoading || !currentAlbum) {
  return <AlbumPageSkeleton />
  }

  return (
    <div className="h-full">
      <ScrollArea className="h-full rounded-md">
        <div className="relative min-h-full">
          <GradientBackground />
          <div className="relative z-10">
            <AlbumHeader
              title={currentAlbum?.title}
              albumImage={currentAlbum?.imageUrl}
              artist={currentAlbum?.artist}
              totalSongs={currentAlbum?.songs.length}
              releaseYear={currentAlbum?.releaseYear}
            />
            <PlayButtonComponent/>
            <AlbumTable  key={currentAlbum?._id} songs={currentAlbum?.songs}/>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}

export default AlbumPage;
