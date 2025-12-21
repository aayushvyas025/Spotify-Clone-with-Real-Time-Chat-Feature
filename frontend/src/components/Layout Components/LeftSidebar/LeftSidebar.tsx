import {Navigation, SidebarPlaylist} from "@/components"

function LeftSidebar() {
  return (
    <div className='h-full flex flex-col gap-2'>
      <Navigation />
      <SidebarPlaylist />
    </div>
  )
}

export default LeftSidebar