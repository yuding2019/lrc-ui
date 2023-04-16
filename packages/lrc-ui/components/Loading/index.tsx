import React from "react";
import classNames from "classnames";

import Text from "../Text";

import { getMainClassName } from "../../utils";

import "./index.scss";

export interface LoadingProps {
  size?: "sm" | "md" | "lg";
  message?: string;
  style?: React.CSSProperties;
  className?: string;
}

const Loading: React.FC<LoadingProps> = (props) => {
  const { size = "sm", message, style, className } = props;
  const mainClassName = getMainClassName("loading");
  const loadingTrackClassName = getMainClassName("loading-track")

  return (
    <span className={classNames(mainClassName, className)} style={style}>
      <span className={classNames(loadingTrackClassName, `${loadingTrackClassName}__${size}`)} />
      {message && <Text size={size}>{message}</Text>}
    </span>
  );
};

export default Loading;
