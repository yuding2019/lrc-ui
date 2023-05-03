import React from 'react';

import classNames from 'classnames';

import { getMainClassName } from '../../utils';
import './index.scss';

export interface HeadingProps
  extends React.BaseHTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  weight?: 'light' | 'default' | 'bold';
  style?: React.CSSProperties;
  className?: string;
}

function Heading(props: React.PropsWithChildren<HeadingProps>) {
  const {
    level = 1,
    weight = 'default',
    style,
    className,
    children,
    ...restProps
  } = props;
  const HeadingHtmlTag = `h${level}` as any;
  const mainClassName = getMainClassName('heading');
  const actualClassName = classNames(
    className,
    mainClassName,
    `${mainClassName}--${level}`,
    `${mainClassName}--${weight}`,
  );

  return (
    <HeadingHtmlTag {...restProps} className={actualClassName} style={style}>
      {children}
    </HeadingHtmlTag>
  );
}

export default Heading;
