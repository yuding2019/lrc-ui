import React from 'react';

import classNames from 'classnames';

import { getMainClassName } from '../../utils';

import Text from '../Text';
import './index.scss';

export interface TagProps {
  size?: 'xs' | 'sm' | 'md' | 'lg';
  type?: 'light' | 'dark';
  round?: boolean;
  outline?: boolean;
  color?: 'blue' | 'red' | 'gray' | 'purple';
  selected?: boolean;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

function Tag(props: React.PropsWithChildren<TagProps>) {
  const {
    size = 'md',
    type = 'light',
    round,
    outline,
    color = 'blue',
    disabled,
    selected,
    className,
    style,
    children,
  } = props;
  const mainClassName = getMainClassName('tag');

  return (
    <div
      className={classNames(mainClassName, className, {
        [`${mainClassName}--round`]: round,
        [`${mainClassName}--outline`]: outline,
        [`${mainClassName}--${size}`]: !!size,
        [`${mainClassName}--${type}`]: !!type,
        [`${mainClassName}--${color}`]: !!color,
        [`${mainClassName}--${disabled}`]: disabled,
      })}
      style={style}
    >
      <Text size={size}>{children}</Text>
    </div>
  );
}

export default Tag;
