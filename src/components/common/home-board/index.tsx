import React, { useCallback, useEffect, useState } from 'react';
import IconFont from 'components/common/svg';
import { message } from 'antd';
import top from 'images/home/top.png';
import styles from './style.module.scss';

export default function HomeBoard (props: {tags: Array<string>, currentTab: number, handleTab: any }) {

 
  
  const { tags,currentTab, handleTab } =props;
  // const toSlideItem = (index) => {
  //   this.mySwiper1.slideTo(index, 300, false);
  // }
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
         tags.map((item, index) => {
            return (
              <div key={index} className={styles.tabItem} onClick={() => handleTab(index)}>
                <span className={index === currentTab ? styles.navItem:null}>{item}</span>
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