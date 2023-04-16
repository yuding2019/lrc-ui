import React from "react";
import classNames from "classnames";

import { getMainClassName } from "../../utils";

import "./index.scss";

export interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  bold?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

function Heading(props: React.PropsWithChildren<HeadingProps>) {
  const { level = 1, bold, style, className, children } = props;
  const HeadingHtmlTag = `h${level}` as any;
  const mainClassName = getMainClassName("heading");
  const actualClassName = classNames(
    className,
    mainClassName,
    `${mainClassName}__${level}`,
    {
      [`${mainClassName}__bold`]: bold,
    }
  );

  return (
    <HeadingHtmlTag className={actualClassName} style={style}>
      {children}
    </HeadingHtmlTag>
  );
}

export default Heading;
