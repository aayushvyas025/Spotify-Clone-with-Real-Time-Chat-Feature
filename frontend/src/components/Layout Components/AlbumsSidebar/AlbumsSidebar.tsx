import {LinkComponent} from "@/components"
import { frontendRoutes } from "@/helper"
import type { AlbumSidebarProps } from "@/types/interfaces/album sidebar/albumSidebar";

const {albumPageRoute} = frontendRoutes;

function AlbumsSidebar({albumId, styles}:AlbumSidebarProps) {
  return (
    <LinkComponent href={`${albumPageRoute}/${albumId}`} styles={styles}></LinkComponent>
  )
}

export default AlbumsSidebar