import {LinkComponent, Text} from "@/components"
import { frontendRoutes } from "@/helper"
import type { AlbumSidebarProps } from "@/types/interfaces";


const {albumRoute} = frontendRoutes;

function AlbumsSidebar({albumId, styles, album}:AlbumSidebarProps) {
  
  return (
    <LinkComponent href={`${albumRoute}/${albumId}`} styles={styles}>
      <img src={album?.imageUrl} alt={album?.title} className="size-12 rounded-md flex-shrink-0 object-cover" />
      <div className="flex-1 min-w-0 hidden md:block">
        <Text textType="p" text={album?.title} styles="font-medium truncate" /> 
        <Text textType="p" text={`Album • ${album?.artist}`} styles="text-zinc-400 text-sm truncate" />
      </div>
    </LinkComponent>
  )
}

export default AlbumsSidebar