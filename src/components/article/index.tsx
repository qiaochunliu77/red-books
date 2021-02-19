import React, { useEffect, useRef, useState } from 'react';
import IconFont from 'components/common/svg';
import moment from 'moment';
import { navigateTo } from 'utils/navigate';

import styles from 'components/article/style.module.scss';

interface HeaderProps {
  avatar: string;
  userName: string;
  hasFocus: boolean;
}
interface ContentProps {
  imgUrl: string;
  title: string;
  content: string;
  time: string;
}

const Header = (props: HeaderProps) => {
  const { avatar, userName, hasFocus } = props;
  return (
    <div className={styles.header}>
      <div className={styles.hLeft}>
        <div onClick={() => navigateTo(props,'/back')}>
          <IconFont type='iconzuojiantou' style={{ fontSize:'.727273rem', color: 'black' }} />
        </div>
        <div className={styles.avatarBox}>
          <img src={avatar} alt="" className={styles.avatar} />
        </div>
        <div className={styles.name}>{userName}</div>
      </div>

      <div className={styles.hRight}>
        <div className={styles.focus}>{hasFocus ? '已关注' : '关注'}</div>
        <div>
          <IconFont type='iconfenxiang' style={{ fontSize:'.727273rem', color: 'black' }} />
        </div>
      </div>
    </div>
  );
};
const Content = (props: ContentProps) => {
  const { imgUrl, title, content, time } = props;
  return (
    <div className={styles.contentwrap}>
      <div className={styles.imgBox}>
        <img src={imgUrl} className={styles.img} alt='' />
      </div>
      <div className={styles.wrap}>
        <div className={styles.title}>{title}</div>
        <div className={styles.content}>{content}</div>
        <div className={styles.bottom}>
          <div className={styles.time}>{moment().format("M-D")}</div>
          <div className={styles.unLike}>
            <IconFont type='iconkulian' className={styles.unLikeIncon} />
            <div style={{ fontSize: '.3rem', paddingLeft:'.1rem' }}>不喜欢</div>
          </div>
        </div>
      </div>
    </div>
  );
};
const CommentInput =(props) => {
  const { like,collection, comment } = props;
  const ref = useRef(null);
  const [value, setValue ]= useState<string>('');
  const [showInput, setShowInput] = useState<boolean>(false); // 是否显示输入框

  useEffect(() => {
    // console.log(ref.current.value,'000');
  },[]);
  const inutOnBlur = (e) => {
    let val = e.currentTarget.value;
    setValue(val);
    console.log(val,'999');
  };
  const handleSubmit = () => {
    setValue('');
    ref.current.value='';
    ref.current.focus();
    setShowInput(false);
  };
  const Input =() => {
    return (
      <div className={styles.commentInput}>
        <input type='text' className={styles.input} ref={ref} placeholder='喜欢就给个评论支持一下～' onChange={inutOnBlur} />
        <div className={styles.submit} onClick={handleSubmit}>发送</div>
      </div>
    );
  };
  return(
    <div className={styles.commentInput}>
      <div className={styles.inputBox} onClick={() => setShowInput(true)}>
        <IconFont type='iconbianji'  />
        说点什么...
      </div>
      <div className={styles.list}>
        <IconFont type='iconaixin' style={{ fontSize: '.75rem' }} />
        <div>40</div>
        <IconFont type='iconaixin' style={{ fontSize: '.75rem' }} />
        <div>40</div>
        <IconFont type='iconaixin' style={{ fontSize: '.75rem' }} />
        <div>40</div>
      </div>

      {
        showInput && <Input />
      }
    </div>
  );
};

export default function Article() {
  const mock = { userName: '仙女', title: '我的苹果11是不是全网最便宜的我的苹果11是不是全网最便宜的',time: '1612507948236',like: 12, collection:20, comment: 9, hasFocus: true, avatar:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fs9.sinaimg.cn%2Fbmiddle%2F5ceba31bg5d6503750788&refer=http%3A%2F%2Fs9.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614318742&t=5f525e34b863967c6290b1405cd55563',imgUrl:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fs9.sinaimg.cn%2Fbmiddle%2F5ceba31bg5d6503750788&refer=http%3A%2F%2Fs9.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614318742&t=5f525e34b863967c6290b1405cd55563', content:'蹲了一周我的苹果11是不是全网最便宜的我的苹果11是不是全网最便宜的' };

  return (
    <div className={styles.container}>
      <Header userName={mock.userName} hasFocus={mock.hasFocus} avatar={mock.avatar} />
      <Content imgUrl={mock.imgUrl} title={mock.title} content={mock.content} time={mock.time} />
      <CommentInput like={mock.like} collection={mock.collection} comment={mock.comment} />
    </div>
  );
}