import React from "react";
import { Link } from "react-router-dom";

type LinkComponentProps = {
  href: string;
  styles?: string;
  content?: string;
  linkIcon?: React.ReactNode;
   children?: React.ReactNode;
};

function LinkComponent({
  href,
  styles,
  content,
  linkIcon,
  children
}: LinkComponentProps) {
  return (
    <Link to={href} className={styles}>
      {linkIcon}
      {content}
      {children}
    </Link>
  );
}

export default LinkComponent;
