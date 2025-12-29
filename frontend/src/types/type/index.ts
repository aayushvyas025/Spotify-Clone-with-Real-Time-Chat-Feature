export type Songs = {
  _id: string;
  title: string;
  artist: string;
  imageUrl: string;
  audioUrl: string;
  duration: number;
  albumId: string;
  createdAt?:string;
  updatedAt?:string
};

export type Albums = {
  _id: string;
  title: string;
  artist: string;
  imageUrl: string;
  releaseYear: number;
  songs: Songs[];
};

export type TextType =
  | "p"
  | "span"
  | "strong"
  | "em"
  | "small"
  | "label"
  | "cite"
  | "q"
  | "abbr"
  | "del"
  | "ins";

export type HelperFunctions = {
  checkClerkPublishableKey: (publishableKey: string) => void;
  updateApiToken: (givenToken: string | null) => void;
  songDurationFormatter:(seconds:number) => string
};

export type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type User = {
  _id:string
   fullName: string;
    imageUrl: string;
}
