import React from 'react';
import loading from 'images/home/loading.gif';
import styles from 'components/common/loading/style.module.scss';

export default function Loading(props: {tips?: string}) {
  const { tips= '正在加载中' } = props;
  return (
    <div className={styles.loadWrap}>
      <div className={styles.loadImg}>
        <img src={loading} alt='' style={{ width: '44px', height: '44px' }} />
      </div>
      <div className={styles.tip}>{tips}</div>
    </div>
  );
}