import type { Song } from "@/types/type/apiData/apiData";
import type { InjectedSongsProps } from "../hoc/hocInterface";


export interface FeaturedSectionProps {
  songs:Song[]
}

export interface HomeSectionGridProps {
  title:string; 
  songs:Song[]
}

export interface MadeForYouSectionProps extends InjectedSongsProps<Song> {} 

export interface TrendingSectionProps extends InjectedSongsProps<Song> {}