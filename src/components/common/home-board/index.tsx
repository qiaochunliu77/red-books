import React, { useEffect, useState } from 'react';
import IconFont from 'components/common/svg';
import { getLocation } from 'utils/map-location';
import styles from './style.module.scss';

export default function HomeBoard () {
  const [city, setCity] = useState<string>('上海');
  useEffect(() => {
    setCity(getLocation());
  },[]);
  return (
    <div className={styles.container}>
      <IconFont type='iconxinbaniconshangchuan-' style={{ fontSize: '.5rem',flex:1 }} />
      <div className={styles.tab}>
        {
          ['关注', '发现', city].map((item, index) => {
            return (
              <div key={index} className={styles.tabItem}>{item}</div>
            );
          })
        }
      </div>
      <IconFont type='iconsousuo' style={{ fontSize: '.5rem',flex:1 }} />
    </div>
  );
}