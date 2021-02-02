import React, { useCallback, useEffect, useState } from 'react';
import IconFont from 'components/common/svg';
import { message } from 'antd';
import { getLocation } from 'utils/map-location';
import top from 'images/home/top.png';
import { BorderBottomOutlined } from '@ant-design/icons';
import styles from './style.module.scss';

export default function HomeBoard () {
  const [city, setCity] = useState<string>('上海');
  const [currentTab, setCurrenttab] = useState<number>(0);

  useEffect(() => {
    setCity(getLocation());
  },[]);
  
  const handleTabChange = (index) => {
    setCurrenttab(index);
  };
  const navToCamera = () => {
    message.info('此页面还在开发中哦，敬请期待～～');
    // 
  };
  const navToSerach = () => {
    message.info('此页面还在开发中哦，敬请期待～～');
  };
  return (
    <div className={styles.container}>
      <div className={styles.imgWrap} onClick={navToCamera}>
        <img src={top} alt='' style={{ marginLeft: '.4rem',width: '.727273rem',height:'.545455rem' }} />
      </div>
      <div className={styles.tab}>
        {
          ['关注', '发现', city].map((item, index) => {
            return (
              <div key={index} className={styles.tabItem}>
                <span className={index === currentTab ? styles.navItem:null} onClick={() => handleTabChange(index)}>{item}</span>
              </div>
            );
          })
        }
      </div>
      <div style={{ flex:1 }} onClick={navToSerach}>
        <IconFont type='iconsousuo' style={{ fontSize: '.5rem',marginLeft: '.8rem' }}  />
      </div>      
    </div>
  );
}