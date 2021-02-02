/* eslint-disable jsx-a11y/alt-text */
import React,{ useEffect, useState } from 'react';
import Macy from 'macy';
import IconFont from 'components/common/svg';
import styles from './style.module.scss';
 

function Gallery(props: any):any {
  const { elements } = props;
  const [cardInfo, setCardInfo] = useState<any>(elements);

  useEffect(() => {
      setCardInfo(elements);
      
  },[elements]);
  return (
    <div className={styles.container} style={{ overflow: 'hidden' }}>
      {
        cardInfo.map((i,index)=> {
        return (
          <div key={index} className={styles.wrap}>
            <div className={styles.left}>
              <div className={styles.imgBox}>
                <img src={i.src} className={styles.img} />
              </div>

              <div className={styles.infoWrap}>
                <div className={styles.title}>{i.title}</div>

                <div className={styles.info}>

                  <div className={styles.infoLeft}>
                    {/* <div className={styles.userWrap}> */}
                      <div className={styles.icon}>
                        <img src={i.icon} className={styles.iconImg} alt="" />
                      </div>
                    {/* </div> */}
                    <div className={styles.name}>{i.userName}</div>
                  </div>

                  <div className={styles.infoRight}>
                    {
                      i.hasStar ? (<IconFont type='iconaixin1' style={{ fontSize: '.285714rem', lineHeight:'.75rem'  }}  />) 
                      : (<IconFont type='iconaixin' />)
                    }
                    <div className={styles.star}>{i.star}</div>
                  </div>

                </div>
              </div>
            </div>
            <div className={styles.right}>
                <img src={i.src} className={styles.img} />
            </div>
          </div>
            );
        })
      }
    </div>
  );
}

export default Gallery;

