import { Navigation } from "@/components/Navigation Component";
import {SidebarPlaylist} from "@/components/Sidebar Components"

function LeftSidebar() {
  return (
    <div className="h-full flex flex-col gap-2">
      <Navigation />
      <SidebarPlaylist />
    </div>
  );
}

export default LeftSidebar;
