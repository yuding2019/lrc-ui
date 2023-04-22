import { useEffect, useState } from "react";
import { MDXProvider } from "@mdx-js/react";
import Link from "next/link";

import { Text, Heading } from "lrc-ui";

import SideMenu from "../components/SideMenu";
import ComponentPreview from "../components/ComponentPreview";

import type { AppProps } from "next/app";

import "../styles/editor-theme.css";
import "../styles/reset.css";
import styles from "./_app.module.scss";

const map = {
  pre: ComponentPreview,
  p: (props: any) => <Text type="block" size="lg" {...props} />,
  h1: (props: any) => <Heading level={1} weight="light" {...props} />,
  h2: (props: any) => <Heading level={2} weight="light" {...props} />,
  h3: (props: any) => <Heading level={3} weight="light" {...props} />,
  h4: (props: any) => <Heading level={4} weight="light" {...props} />,
  h5: (props: any) => <Heading level={5} weight="light" {...props} />,
  h6: (props: any) => <Heading level={6} weight="light" {...props} />,
  a: (props: any) => <Link {...props} />,
};

function MyApp(props: AppProps) {
  const { Component, pageProps } = props;

  const [isBrowser, setIsBrowser] = useState(false);
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (!isBrowser) {
    return null;
  }

  return (
    <div className={styles.wrapper}>
      <SideMenu />
      <div className={styles.contentWrap}>
        <div className={styles.content}>
          <MDXProvider components={map}>
            <Component {...pageProps} />
          </MDXProvider>
        </div>
      </div>
      <div className={styles.emptyLoadFont} />
    </div>
  );
}

export default MyApp;
