import React from "react";
import classNames from "classnames";

import { getMainClassName } from "../../utils";

import "./index.scss";

export interface TextProps {
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
      >
        {children}
      </span>
    );
  }

  return (
    <p className={actualClassName} style={style}>
      {children}
    </p>
  );
}

export default Text;
