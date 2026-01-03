import type { HeadingProps } from "@/types/interfaces/helperComponentProps/helperComponentPropsInterface";

import React from "react";

function Heading({
  headingLevel = "h1",
  styles,
  title,
  children,
}: HeadingProps) {
  const validHeadings: HeadingLevel[] = ["h1", "h2", "h3", "h4", "h5", "h6"];

  const finalHeading: HeadingLevel = validHeadings.includes(headingLevel)
    ? headingLevel
    : "h1";

  if (!validHeadings.includes(headingLevel)) {
    console.error(
      `Invalid "headingLevel" prop: ${headingLevel}. Use h1–h6 only.`
    );
  }

  return React.createElement(
    finalHeading,
    { className: styles },
    <>
      {title}
      {children}
    </>
  );
}

export default Heading;
