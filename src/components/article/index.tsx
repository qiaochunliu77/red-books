import React from 'react';
import IconFont from 'components/common/svg';
import { navigateTo } from 'utils/navigate';

import styles from 'components/article/style.module.scss';

interface HeaderProps {
  avatar: string;
  userName: string;
  hasFocus: boolean;
}
const Header = (props: HeaderProps) => {
  const { avatar, userName, hasFocus } = props;
  
  return (
    <div className={styles.header}>
      <div className={styles.hLeft}>
        <div onClick={() => navigateTo(props,'/back')}>
          <IconFont type='iconzuojiantou' style={{ fontSize:'30px' }} />
        </div>
        <div>
          <img src={avatar} alt="" />
        </div>
        <div>{userName}</div>
      </div>

      <div className={styles.hRight}>
        <div>{hasFocus ? '已关注' : '关注'}</div>
        <div>
          <IconFont type='iconfenxiang' />
        </div>
      </div>
    </div>
  );
};
export default function Article() {
  return (
    <div className={styles.container}>
      <Header userName='仙女' hasFocus avatar='https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fs9.sinaimg.cn%2Fbmiddle%2F5ceba31bg5d6503750788&refer=http%3A%2F%2Fs9.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614318742&t=5f525e34b863967c6290b1405cd55563' />
    </div>
  );
}