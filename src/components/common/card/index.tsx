/* eslint-disable jsx-a11y/alt-text */
import React,{ useEffect, useState } from 'react';
import IconFont from 'components/common/svg';
import styles from './style.module.scss';
 

function Card(props: any):any {
  const { elements } = props;
  const [cardInfo, setCardInfo] = useState<any>(elements);

  useEffect(() => {
    console.log(elements,'elements');
      setCardInfo( elements );
  },[elements]);

  const giveStar =(id) => {
    // 点赞逻辑...
  };

  return (
    <div className={styles.container} style={{ overflow: 'hidden' }}>
      {
        cardInfo.map((i,index)=> {
        // 格式化用户名，超出隐藏
        const userName = String(i.userName).length >7 ? String(i.userName).substring(0,6).concat('...'): i.userName;
        // 格式化点赞数量
        const dealNumber = (num) => {
          let n = Math.floor(num / 1000);
          return num > 999 ? `${n}k+` : num;
        };
  
        return (
            <div className={styles.left} key={index}>
              <div className={styles.imgBox}>
                <img src={i.src} className={styles.img} />
              </div>

              <div className={styles.infoWrap}>
                <div className={styles.title}>{i.title}</div>

                <div className={styles.info}>

                  <div className={styles.infoLeft}>
                      <div className={styles.icon}>
                        <img src={i.icon} className={styles.iconImg} alt="" />
                      </div>
                    <div className={styles.name}>{userName}</div>
                  </div>

                  <div className={styles.infoRight} onClick={() => giveStar(i.acticleId)}>
                    {
                      i.hasStar ? (<IconFont type='iconaixin1' style={{ fontSize: '.3rem', lineHeight:'.8rem', color:'rgb(251,40,71)'  }}  />) 
                      : (<IconFont type='iconaixin' style={{ fontSize: '.3rem', lineHeight:'.8rem' }} />)
                    }
                    <div className={styles.star}>{dealNumber(i.star)}</div>
                  </div>

                </div>
              </div>
          </div>
            );
        })
      }
    </div>
  );
}

export default Card;

