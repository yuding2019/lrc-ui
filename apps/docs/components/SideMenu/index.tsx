import { useRouter } from "next/router";
import Link from "next/link";

import { LRC_UI_ROUTES } from "../../router";

import styles from "./index.module.scss";
import classNames from "classnames";
import { Text } from "lrc-ui";

export type LrcUiRoute = (typeof LRC_UI_ROUTES)[number];

const SideMenu: React.FC = () => {
  const { pathname } = useRouter();

  const menuItemRender = (item: LrcUiRoute) => {
    if (item.children) {
      return (
        <div key={item.name} className={styles.group}>
          <Text className={styles.groupName}>{item.name}</Text>
          {item.children.map((child) => menuItemRender(child))}
        </div>
      );
    }

    return (
      <Link
        href={item.path}
        key={item.path}
        className={classNames(styles.item, {
          [styles.active]: pathname === item.path,
        })}
      >
        {item.name}
      </Link>
    );
  };

  return (
    <div className={styles.wrapper}>
      {LRC_UI_ROUTES.map((item) => menuItemRender(item))}
    </div>
  );
};

export default SideMenu;
