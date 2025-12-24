import type { Albums } from "../../object types/apis types/apiInterfaces";

export interface AlbumSidebarProps {
    albumId:string,
    styles?:string,
    album:Albums
}