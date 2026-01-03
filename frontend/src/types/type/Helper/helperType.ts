export type HelperFunctions = {
  checkClerkPublishableKey: (publishableKey: string) => void;
  updateApiToken: (givenToken: string | null) => void;
  songDurationFormatter: (seconds: number) => string;
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

export type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type SongsKey =
  | "songs"
  | "featuredSongs"
  | "trendingSongs"
  | "madeForYouSongs";
