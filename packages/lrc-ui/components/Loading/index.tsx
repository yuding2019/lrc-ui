import React from "react";
import classNames from "classnames";

import Text from "../Text";

import { getMainClassName } from "../../utils";

import "./index.scss";

export interface LoadingProps {
  size?: "sm" | "md" | "lg";
  message?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

const Loading: React.FC<LoadingProps> = (props) => {
  const { size = "sm", message, disabled, style, className } = props;
  const mainClassName = getMainClassName("loading");
  const loadingTrackClassName = getMainClassName("loading-track");

  return (
    <span
      className={classNames(mainClassName, className, {
        [`${mainClassName}--disabled`]: disabled,
      })}
      style={style}
    >
      <span
        className={classNames(
          loadingTrackClassName,
          `${loadingTrackClassName}--${size}`
        )}
      />
      {message && <Text size={size}>{message}</Text>}
    </span>
  );
};

export default Loading;
