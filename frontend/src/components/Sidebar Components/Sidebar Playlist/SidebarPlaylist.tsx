import {AlbumsSidebar} from "@/components/Album Components";
import { Text } from "@/components/Helper Components";
import { SidebarPlaylistSkeleton } from "@/components/Skeleton Components";
import { ScrollArea } from "@/components/ui/scroll-area";
import { applicationContent } from "@/helper";
import { useMusicStore } from "@/store";
import { Library } from "lucide-react";
import { useEffect } from "react";

const { leftSidebarContent } = applicationContent;
const { sidebarPlaylist } = leftSidebarContent;

function SidebarPlaylist() {
  const { isLoading, albums, fetchAlbums } = useMusicStore();

  useEffect(() => {
    fetchAlbums();
  }, [fetchAlbums]);

  return (
    <div className="flex-1 rounded-lg bg-zinc-900 p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <Library className="size-5 mr-2" />
          <Text
            textType="span"
            text={sidebarPlaylist.title}
            styles="hidden md:inline"
          />
        </div>
      </div>
      <ScrollArea className="h-[calc(100vh-300px)]">
        <div className="space-y-2">
          {isLoading ? (
            <SidebarPlaylistSkeleton />
          ) : (
            albums?.map((album) => (
              <AlbumsSidebar
                key={album._id}
                albumId={album._id}
                album={album}
                styles="p-2 hover:bg-zinc-800 rounded-md flex items-center gap-3 group cursor-pointer"
              />
            ))
          )}
        </div>
      </ScrollArea>
    </div>
  );
}

export default SidebarPlaylist;
