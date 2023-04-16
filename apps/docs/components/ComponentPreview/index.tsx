import { LiveEditor, LivePreview, LiveProvider, LiveError } from "react-live";
import { Code20Regular } from "@fluentui/react-icons";
import classNames from "classnames";

import * as Scope from "lrc-ui";

import styles from "./index.module.scss";
import React, { useState } from "react";

export interface ComponentPreviewProps {
  children?: React.ReactNode;
}

const EDITOR_THEME = {
  plain: { color: "unset", backgroundColor: "#fafafa" },
  styles: [],
};

const LIVE_PREVIEW_PROPS: Record<string, unknown> = {
  className: styles.preview,
};

function ComponentPreview(props: ComponentPreviewProps) {
  const { children } = props;

  const [expandCode, setExpandCode] = useState(false);

  if (!React.isValidElement(children)) {
    return null;
  }

  return (
    <div className={styles.wrapper}>
      <LiveProvider code={children.props.children as string} scope={Scope}>
        <LivePreview {...LIVE_PREVIEW_PROPS} />
        <div className={styles.toolbar}>
          <div
            className={classNames(styles.codeBtn, {
              [styles.active]: expandCode,
            })}
            onClick={() => setExpandCode((prev) => !prev)}
          >
            <Code20Regular />
          </div>
        </div>
        <LiveEditor
          className={classNames(styles.editor, {
            [styles.open]: expandCode,
          })}
          theme={EDITOR_THEME}
        />
        <LiveError />
      </LiveProvider>
    </div>
  );
}

export default ComponentPreview;
