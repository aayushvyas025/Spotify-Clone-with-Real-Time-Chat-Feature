import type { TextType } from "@/types/object types/text type/textType";
import type { ReactNode } from "react";

export type TextComponentProps = {
  textType?: TextType;
  styles?: string;
  text?: ReactNode;
};