import React, { type ReactNode } from "react";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type HeadingProps = {
  headingLevel?: HeadingLevel;
  styles?: React.HTMLAttributes<HTMLHeadingElement>;
  title?: ReactNode;
  children?: ReactNode;
};

function Heading({
  headingLevel = "h1",
  styles,
  title,
  children,
}: HeadingProps) {
  const validHeadings: HeadingLevel[] = [
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
  ];

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
    styles,
    <>
      {title}
      {children}
    </>
  );
}

export default Heading;

