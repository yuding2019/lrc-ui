import React from "react";
import classNames from "classnames";

import Text from "../Text";
import Loading from "../Loading";

import { getMainClassName } from "../../utils";

import "./index.scss";

export interface ButtonProps {
  size?: "sm" | "md" | "lg";
  type?: "primary" | "default" | "text" | "link";
  outline?: boolean;
  round?: boolean;
  danger?: boolean;
  loading?: boolean;
  disabled?: boolean;
  href?: string;
  style?: React.CSSProperties;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
}

function Button(props: React.PropsWithChildren<ButtonProps>) {
  const {
    size = "md",
    type = "default",
    round,
    danger,
    outline,
    disabled,
    loading,
    href,
    className,
    style,
    children,
    onClick,
  } = props;
  const mainBtnClassName = getMainClassName("btn");
  const actualBtnClassName = classNames(
    mainBtnClassName,
    className,
    `${mainBtnClassName}--${type}`,
    `${mainBtnClassName}--${size}`,
    {
      [`${mainBtnClassName}--round`]: round,
      [`${mainBtnClassName}--disabled`]: loading || disabled,
      [`${mainBtnClassName}--${type}-danger`]: danger,
      [`${mainBtnClassName}--${type}-outline`]: outline,
    }
  );

  const handleClick = (e: React.MouseEvent) => {
    if (loading || disabled) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    onClick?.(e);
  };

  if (href) {
    return (
      <a
        href={href}
        className={actualBtnClassName}
        style={style}
        onClick={handleClick}
      >
        {loading && <Loading size={size} className={`${mainBtnClassName}__loading`} />}
        <Text size={size}>{children}</Text>
      </a>
    );
  }

  return (
    <button
      className={actualBtnClassName}
      type="button"
      style={style}
      disabled={loading || disabled}
      onClick={handleClick}
    >
      {loading && <Loading size={size} className={`${mainBtnClassName}__loading`} />}
      <Text size={size}>{children}</Text>
    </button>
  );
}

Button.displayName = "Button";

export default Button;
