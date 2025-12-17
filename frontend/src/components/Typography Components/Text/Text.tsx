import React, { type ReactNode } from "react";

/** Allowed text tags */
type TextType =
  | "p"
  | "span"
  | "strong"
  | "em"
  | "small"
  | "label"
  | "cite"
  | "q"
  | "abbr"
  | "del"
  | "ins";

type TextComponentProps = {
  textType?: TextType;
  styling?: string;
  text?: ReactNode;
};

function TextComponent({ textType = "p", styling, text }: TextComponentProps) {
  const validText: TextType[] = [
    "p",
    "span",
    "strong",
    "em",
    "small",
    "label",
    "cite",
    "q",
    "abbr",
    "del",
    "ins",
  ];

  const finalTextType: TextType = validText.includes(textType) ? textType : "p";

  if (!validText.includes(textType)) {
    console.error(`Invalid "textType" prop: ${textType}. Use p and span only.`);
  }

  return React.createElement(finalTextType, { className: styling }, text);
}

export default TextComponent;
