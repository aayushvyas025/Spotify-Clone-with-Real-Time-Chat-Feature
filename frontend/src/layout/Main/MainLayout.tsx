import { AudioPlayer, PlayBackControls } from "@/components/Media Components";
import { LeftSidebar, RightSidebar } from "@/components/Sidebar Components";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { useResponsiveLayout } from "@/hooks";
import { Outlet } from "react-router-dom";

function MainLayout() {
 const {mobileLayout} = useResponsiveLayout();

  return (
    <div className="h-screen w-screen bg-black text-white flex flex-col">
      <ResizablePanelGroup
        orientation="horizontal"
        className="flex-1 flex h-full overflow-hidden p-2"
      >
        <AudioPlayer />
        <ResizablePanel
          defaultSize={250}
          minSize={mobileLayout ? 0 : 20}
          maxSize={300}
        >
          <LeftSidebar/>
        </ResizablePanel>
        <ResizableHandle className="w-2 bg-black rounded-md transition-colors" />
        <ResizablePanel defaultSize={mobileLayout? 80 : 60}>
          <Outlet />
        </ResizablePanel>
        <ResizableHandle className="w-2 bg-black rounded-md transition-colors" />
        { !mobileLayout &&
         <>
          <ResizablePanel
          defaultSize={200}
          minSize={0}
          maxSize={250}
          collapsedSize={0}
          >
          <RightSidebar />
        </ResizablePanel>
        </>
    }
      </ResizablePanelGroup>
      <PlayBackControls />
    </div>
  );
}

export default MainLayout;
