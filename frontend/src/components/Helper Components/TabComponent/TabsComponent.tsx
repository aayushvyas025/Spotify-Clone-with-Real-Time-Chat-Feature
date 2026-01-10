import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {SongTabContent, AlbumTabContent} from "@/components/Helper Components"
import type { TabsComponentProps } from "@/types/interfaces/Admin/adminInterface";
import { Album, Music } from "lucide-react";

function TabsComponent({ song, album }: TabsComponentProps) {
  return (
    <Tabs defaultValue={song.option} className="space-y-6">
      <TabsList className="p-1 bg-zinc-800/50">
        <TabsTrigger
          value={song.option}
          className="data-[state=active]:bg-zinc-700"
        >
          <Music className="size-4 mr-2" />
          {song.title}
        </TabsTrigger>
        <TabsTrigger
          value={album.option}
          className="data-[state=active]:bg-zinc-700"
        >
          <Album className="size-4 mr-2" />
          {album.title}
        </TabsTrigger>
      </TabsList>
      <TabsContent value={song.option}>
       <SongTabContent />
      </TabsContent>
      <TabsContent value={album.option}>
        <AlbumTabContent />
      </TabsContent>
    </Tabs>
  );
}

export default TabsComponent;
