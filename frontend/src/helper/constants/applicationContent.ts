type Primitive = string | number | boolean;

export type ContentValue =
  | Primitive
  | ContentMap
  | ContentValue[];

export interface ContentMap {
  [key: string]: ContentValue;
}


export const applicationContent = {
  topBarContent: {
    title: "Groove Box",
    topBarLink: {
      adminTopBar: "Admin Dashboard",
    },
  },
} as const satisfies ContentMap;


export default applicationContent;
