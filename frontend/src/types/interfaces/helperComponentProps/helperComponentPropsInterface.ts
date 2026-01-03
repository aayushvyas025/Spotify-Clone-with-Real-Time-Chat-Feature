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
