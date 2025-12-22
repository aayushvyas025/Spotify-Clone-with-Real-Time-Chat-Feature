import type { HeadingLevel } from "@/types/object types/heading type/headingType";
import type { ReactNode } from "react";

export interface HeadingProps {
  headingLevel?: HeadingLevel;
  styles?:string;
  title?: ReactNode;
  children?: ReactNode;
};