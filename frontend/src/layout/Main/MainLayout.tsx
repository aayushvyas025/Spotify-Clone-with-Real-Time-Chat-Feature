import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import React from 'react'
import { Outlet } from 'react-router-dom'


function MainLayout() {
    const isMobile = false
  return (
    <div className='h-screen bg-black text-white flex flex-cols'>
        <ResizablePanelGroup>
            {/* Left Sidebar */}
            <ResizablePanel defaultSize={20} minSize={isMobile? 0 : 10} maxSize={30} ></ResizablePanel>
            {/* Main Content */} 
            <ResizablePanel>
                <Outlet />
            </ResizablePanel>
        </ResizablePanelGroup>
    </div>
  )
}

export default MainLayout  

