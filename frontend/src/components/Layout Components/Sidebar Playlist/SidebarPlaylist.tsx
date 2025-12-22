import { SidebarPlaylistSkeleton, Text } from "@/components";
import { ScrollArea } from "@/components/ui/scroll-area";
import { applicationContent } from "@/helper";
import { useMusicStore } from "@/store";
import { Library } from "lucide-react";


const { leftSidebarContent } = applicationContent;
const { sidebarPlaylist } = leftSidebarContent;



function SidebarPlaylist() {
// const {isLoading} = useMusicStore(); 
    
  return (
    <div className="flex-1 rounded-lg bg-zinc-900 p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <Library className="size-5 mr-2" />
          <Text textType="span" text={sidebarPlaylist.title} styles="hidden md:inline" />
        </div>
      </div>
      <ScrollArea className="h-[calc(100vh-300px)]">
        <div className="space-y-2">
            {isLoading ? (<SidebarPlaylistSkeleton />) : ("")}
        </div>
      </ScrollArea>
    </div>
  );
}

export default SidebarPlaylist;
