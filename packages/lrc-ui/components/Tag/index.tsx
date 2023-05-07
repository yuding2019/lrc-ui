import React from 'react';

import classNames from 'classnames';

import { getMainClassName } from '../../utils';

import Text from '../Text';
import './index.scss';

export interface TagProps {
  size?: 'sm' | 'md' | 'lg';
  type?: 'default' | 'fill' | 'outline';
  round?: boolean;
  color?: 'blue' | 'red' | 'gray' | 'purple' | 'yellow' | 'green' | 'orange' | 'pink';
  className?: string;
  style?: React.CSSProperties;
}

function Tag(props: React.PropsWithChildren<TagProps>) {
  const {
    size = 'md',
    type = 'default',
    round,
    color = 'blue',
    className,
    style,
    children,
  } = props;
  const mainClassName = getMainClassName('tag');

  return (
    <div
      className={classNames(mainClassName, className, {
        [`${mainClassName}--round`]: round,
        [`${mainClassName}--${size}`]: !!size,
        [`${mainClassName}--${type}`]: !!type,
        [`${mainClassName}--${color}`]: !!color,
      })}
      style={style}
    >
      <Text size={size}>{children}</Text>
    </div>
  );
}

export default Tag;
