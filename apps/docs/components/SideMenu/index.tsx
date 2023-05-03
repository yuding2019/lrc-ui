import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Text } from 'lrc-ui';

import { LRC_UI_ROUTES } from '../../router';

import logo from '../../public/asset/logo.svg';
import styles from './index.module.scss';

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
        <Text weight={pathname === item.path ? 'bold' : 'default'} size="lg">
          {item.name}
        </Text>
      </Link>
    );
  };

  return (
    <div className={styles.wrapper}>
      <Link href="/" className={styles.iconWrap}>
        <img src={logo.src} alt="" />
        Lrc
      </Link>
      <div className={styles.list}>
        {LRC_UI_ROUTES.map((item) => menuItemRender(item))}
      </div>
    </div>
  );
};

export default SideMenu;
