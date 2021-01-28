import React from 'react';
import IconFont from 'components/common/svg';
import { Link } from 'react-router-dom';
import styles from './style.module.scss';


export default function BottomView(props): JSX.Element {
  const navigateToMy = () => {
    // props.history.push('/news');
  };
  return (
    <div className={styles.container}>
      <div className={styles.tab}>首页</div>
      <div className={styles.center}>
        <IconFont type='iconjiahao' style={{ textAlign: 'center',marginTop: '.1rem', fontSize:'.8rem', color: 'white'  }} />
      </div>
      <div className={styles.tab} onClick={navigateToMy}>我</div>
    </div>
  );
}