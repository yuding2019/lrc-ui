import React from "react";
import classNames from "classnames";

import { getMainClassName } from "../../utils";

import "./index.scss";

export interface TextProps extends React.BaseHTMLAttributes<HTMLParagraphElement | HTMLSpanElement> {
  type?: "block" | "inline";
  size?: "xs" | "sm" | "md" | "lg";
  weight?: "light" | "default" | "bold";
  style?: React.CSSProperties;
  className?: string;
}

function Text(props: React.PropsWithChildren<TextProps>) {
  const {
    type = "inline",
    size = "md",
    weight = "default",
    style,
    className,
    children,
    ...restProps
  } = props;
  const mainClassName = getMainClassName("text");
  const actualClassName = classNames(
    className,
    mainClassName,
    `${mainClassName}--${size}`,
    `${mainClassName}--${weight}`,
  );

  if (type === "inline") {
    return (
      <span
        className={classNames(actualClassName, `${mainClassName}--inline`)}
        style={style}
        {...restProps}
      >
        {children}
      </span>
    );
  }

  return (
    <p className={actualClassName} style={style} {...restProps}>
      {children}
    </p>
  );
}

export default Text;
