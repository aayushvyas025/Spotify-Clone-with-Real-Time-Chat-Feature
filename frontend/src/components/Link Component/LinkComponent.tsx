import React from "react";
import { Link } from "react-router-dom";

type LinkComponentProps = {
  href: string;
  styles?: string;
  content?: string;
  linkIcon?: React.ReactNode;
};

function LinkComponent({
  href,
  styles,
  content,
  linkIcon,
}: LinkComponentProps) {
  return (
    <Link to={href} className={styles}>
      {linkIcon}
      {content}
    </Link>
  );
}

export default LinkComponent;
