import React from 'react';
import style from './style.module.scss';

export default function ScrollBar () {

  return (
    <div className={style.container}>
      {
        ['推荐', '附近', '视频', '美食', '旅行','推荐', '附近', '视频', '美食', '旅行','推荐', '附近', '视频'].map((item, index) => {
        return (
          <div key={index} className={style.item}>{item}</div>
        );
        })
      }
    </div>
  );
}