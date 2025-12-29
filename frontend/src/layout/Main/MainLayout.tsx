import { LeftSidebar, RightSidebar } from "@/components";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Outlet } from "react-router-dom";

function MainLayout() {
  const isMobile = false;
  return (
    <div className="h-screen w-screen bg-black text-white flex flex-col">
      <ResizablePanelGroup
        orientation="horizontal"
        className="flex-1 flex h-full overflow-hidden p-2"
      >
        {/* Left Sidebar */}
        <ResizablePanel
          defaultSize={250}
          minSize={isMobile ? 0 : 20}
          maxSize={300}
        >
          <LeftSidebar/>
        </ResizablePanel>
        <ResizableHandle className="w-2 bg-black rounded-md transition-colors" />
        {/* Main Content */}
        <ResizablePanel defaultSize={isMobile ? 80 : 60}>
          <Outlet />
        </ResizablePanel>
        {/* Right Sidebar */}
        <ResizableHandle className="w-2 bg-black rounded-md transition-colors" />
        <ResizablePanel
          defaultSize={200}
          minSize={0}
          maxSize={250}
          collapsedSize={0}
        >
          <RightSidebar />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}

export default MainLayout;
