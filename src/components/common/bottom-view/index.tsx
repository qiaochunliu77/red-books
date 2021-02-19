import React,{ useState } from 'react';
import { Toast } from 'antd-mobile';
import { withRouter } from 'react-router-dom';
import { navigateTo } from 'utils/navigate';
import jiahao from 'images/home/jiahao.png';
import styles from './style.module.scss';


 function BottomView(props): JSX.Element {
  const [isCheck, setIsCheck] = useState<number>(0);

  return (
    <div className={styles.container}>
      <div className={isCheck === 0 ? styles.onTab : styles.tab} onClick={() => { navigateTo(props, '/home'); setIsCheck(0);}}>首页</div>
      <div className={styles.center} onClick={() => {Toast.info('此页面还在开发中哦，敬请期待～～');}}>
        <img src={jiahao} alt='' />
      </div>
      <div className={isCheck === 1 ? styles.onTab : styles.tab} onClick={() => {navigateTo(props, '/auth'); setIsCheck(1);}}>我</div>
    </div>
  );
}
export default withRouter(BottomView);