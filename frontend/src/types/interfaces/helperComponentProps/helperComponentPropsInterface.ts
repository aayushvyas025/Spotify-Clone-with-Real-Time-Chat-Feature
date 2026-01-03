import type { User } from "@/types/type/apiData/apiData";
import type { HeadingLevel, TextType } from "@/types/type/Helper/helperType";
import type { ReactNode } from "react";

export interface ErrorMessageProps {
  message:null | string
} 

export interface FriendsActivityBodyProps {
  users?:User[] ;
}

export interface FriendsActivityUserProps {
  user?:User;
}

export interface HeadingProps {
  headingLevel?: HeadingLevel;
  styles?: string;
  title?: ReactNode;
  children?: ReactNode;
}

export interface TextComponentProps {
  textType?: TextType;
  styles?: string;
  text?: ReactNode;
}
