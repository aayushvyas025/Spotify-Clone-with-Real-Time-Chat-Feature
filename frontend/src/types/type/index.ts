export type Songs = {
  _id: string;
  title: string;
  artist: string;
  imageUrl: string;
  audioUrl: string;
  duration: number;
  albumId: string;
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
};

export type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
