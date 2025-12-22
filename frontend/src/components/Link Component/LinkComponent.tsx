import type { LinkComponentProps } from "@/types/interfaces/link component/linkComponentProp";
import { Link } from "react-router-dom";

function LinkComponent({
  href,
  styles,
  content,
  linkIcon,
  children,
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
