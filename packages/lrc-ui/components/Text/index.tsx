import React from "react";
import classNames from "classnames";

import { getMainClassName } from "../../utils";

import "./index.scss";

export interface TextProps {
  type?: "block" | "inline";
  size?: "xs" | "sm" | "md" | "lg";
  bold?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

function Text(props: React.PropsWithChildren<TextProps>) {
  const {
    type = "inline",
    size = "md",
    bold,
    style,
    className,
    children,
  } = props;
  const mainClassName = getMainClassName("text");
  const actualClassName = classNames(
    className,
    mainClassName,
    `${mainClassName}__${size}`,
    {
      [`${mainClassName}__bold`]: bold,
    }
  );

  if (type === "inline") {
    return (
      <span
        className={classNames(actualClassName, `${mainClassName}__inline`)}
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
