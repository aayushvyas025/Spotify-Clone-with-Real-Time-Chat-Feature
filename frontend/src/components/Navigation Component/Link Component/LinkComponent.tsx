import { Text } from "@/components/Helper Components";
import type { LinkComponentProps } from "@/types/interfaces";
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
      <Text textType="span" text={content} />
      {children}
    </Link>
  );
}

export default LinkComponent;
