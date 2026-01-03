import type { TextComponentProps } from "@/types/interfaces/helperComponentProps/helperComponentPropsInterface";
import type { TextType } from "@/types/type/Helper/helperType";
import React from "react";

function TextComponent({ textType = "p", styles, text }: TextComponentProps) {
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

  return React.createElement(finalTextType, { className: styles }, text);
}

export default TextComponent;
