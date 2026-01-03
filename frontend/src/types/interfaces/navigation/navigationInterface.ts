import type { ReactNode } from "react";

export interface LinkComponentProps {
  href: string;
  styles?: string;
  content?: string;
  linkIcon?: ReactNode;
  children?: ReactNode;
}