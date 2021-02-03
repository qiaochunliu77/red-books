import React from 'react';
import style from './style.module.scss';

export default function ScrollBar (props: {tags: Array<string>}) {

  return (
    <div className={style.container}>
      {
        props.tags.map((item, index) => {
        return (
          <div key={index} className={style.item}>{item}</div>
        );
        })
      }
    </div>
  );
}