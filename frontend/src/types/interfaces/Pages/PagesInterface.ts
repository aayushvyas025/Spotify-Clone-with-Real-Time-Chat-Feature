import type { InjectedSongsProps } from "..";

export interface FeaturedSectionProps {
  songs:Songs[]
}

export interface HomeSectionGridProps {
  title:string; 
  song:Songs[]
}

export interface MadeForYouSectionProps extends InjectedSongsProps<Songs> {} 

export interface TrendingSectionProps extends InjectedSongsProps<Songs> {}