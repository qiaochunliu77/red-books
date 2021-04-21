import React, { useEffect, useRef, useState, useCallback } from 'react';
import IconFont from 'components/common/svg';
import moment from 'moment';
import { navigateTo } from 'utils/navigate';
import styles from 'components/article/style.module.scss';
import { Toast } from 'antd-mobile';



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
// 文章和评论通过id关联，
// 文章记录
const mock = { 
  id: 10001,
  userName: '仙女', 
  title: '我的苹果11是不是全网最便宜的',
  time: '1612507948236',
  likeNum: 12, 
  collectionNum:20, 
  comments: 9, 
  hasFocus: true, 
  avatar:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fs9.sinaimg.cn%2Fbmiddle%2F5ceba31bg5d6503750788&refer=http%3A%2F%2Fs9.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614318742&t=5f525e34b863967c6290b1405cd55563',
  imgUrl:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fs9.sinaimg.cn%2Fbmiddle%2F5ceba31bg5d6503750788&refer=http%3A%2F%2Fs9.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614318742&t=5f525e34b863967c6290b1405cd55563', 
  content:'蹲了一周我的苹果11是不是全网最便宜的我的苹果11是不是全网最便宜的' ,
  isLike: true,
  isCollection: false,
};

// 评论记录
const  comments = [
  {
    id: 10001,
    avatar:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fs9.sinaimg.cn%2Fbmiddle%2F5ceba31bg5d6503750788&refer=http%3A%2F%2Fs9.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614318742&t=5f525e34b863967c6290b1405cd55563',
    userName: 'QIAOCHUN',
    content: '这也太好看了吧!',
    like: 124,
    time: 1612507948236,
    isLike: true,
    isCollection: false,
  },
];

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
          <div className={styles.time}>{moment(1618973441105).fromNow()}</div>
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
  const { likeNum,collectionNum, comments, getValue, isLike, isCollection } = props;
  const ref = useRef(null);
  const [value, setValue ]= useState<any>([]);
  const [showInput, setShowInput] = useState<boolean>(false); // 是否显示输入框
  const [showIsLike, setShowIsLike] = useState<boolean>(isLike); // 是否点赞
  const [showCollect, setShowCollet] = useState<boolean>(isCollection); // 是否收藏;

  const handleSubmit = () => {
    setValue(ref.current.value);
    getValue(ref.current.value)
    Toast.info('评论已发布')
    setShowInput(false);
  };

  const Input =() => {
    return (
      <div className={styles.commentInput}>
        <input type="text" ref={ref} className={styles.input} placeholder='喜欢就给个评论支持一下～'   />
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
        <div onClick={() => {setShowIsLike(!showIsLike); Toast.info('已经点赞啦')}} className={styles.item}>
          <IconFont type={showIsLike ? 'iconaixin1' : 'iconaixin' } style={showIsLike ? { fontSize: '.75rem', color: '#fd2451' } :{ fontSize: '.75rem' } } />
          <div>{showIsLike ? likeNum+1: likeNum}</div>
        </div>
        <div onClick={() => {setShowCollet(!showCollect);Toast.info('收藏成功')}} className={styles.item}>
          <IconFont type={showCollect ? 'iconxingxing' : 'iconxingxing1'} style={showCollect ? { fontSize: '.75rem', color: '#fcbc53' } :{ fontSize: '.75rem' } } />
          <div>{showCollect ? collectionNum+1 : collectionNum}</div>
        </div>
        <div onClick={() => setShowInput(true)} className={styles.item}>
          <IconFont type='iconxiaoxi' style={{ fontSize: '.75rem' }} />
          <div>{comments}</div>
        </div>
        </div>
        
      {
        showInput && <Input />
      }
    </div>
  );
};

const Comments = ({props} :any) => {
  const [isLikep, setIslikep]= useState<any>(false);
  let hasLike ; 
  return (
    props.length >0 ? (
      <div  className={styles.comments}>
       <div className={styles.total}>共 {props.length} 条评论</div>  

       <div className={styles.cmtInput}>
        <div className={styles.avatarBox}>
          <img src={mock.avatar} alt="" className={styles.avatar} />
        </div>
        <div className={styles.cmtTxt}>爱评论的人运气都不差~</div>
       </div>

       {
         props.map((item, index) => {
          // setIslikep(item.isLike)
          hasLike = item.isLike;
           return (
            (
              <div id={index} className={styles.commentWrap}>
                <div className={styles.avatarBox}>
                  <img src={item.avatar} alt="" className={styles.avatar} />
                </div>
                <div className={styles.rightWrap}>
                  <div>
                    <div className={styles.userName}>{item.userName}</div>
                    <div>
                      <span className={styles.commentText}>{item.content}</span>
                      <span className={styles.time}>{moment(item.time).fromNow()}</span>
                    </div>
                  </div>
                  <div className={styles.dianzan} onClick={() => setIslikep(!hasLike) }>
                    <IconFont type={hasLike ?'iconaixin1' : 'iconaixin'} style={hasLike &&{ fontSize: '.4rem', color:'red'  }} />
                    {
                      item.like !== 0 && <div>{item.like}</div>
                    }
                  </div>
                </div>
              </div>
             )
           )
         })
       }
      </div>
    ): (
    <div className={styles.empty}>
      <IconFont type='iconcaogao' style={{fontSize: '.75rem'}} />
      <div className={styles.emptyTxt}>这是一片荒草地，点击评论</div>
    </div>
    )
    
  )
}
export default function Article() {
  const [commentVal, setCommentVal] = useState<any>(comments);
  return (
    <div className={styles.container}>
      <Header userName={mock.userName} hasFocus={mock.hasFocus} avatar={mock.avatar} />
      <Content imgUrl={mock.imgUrl} title={mock.title} content={mock.content} time={mock.time} />
      <Comments props={commentVal}  />
      <CommentInput getValue={(val) => {setCommentVal([...commentVal, {
    id: 10001,
    avatar:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fs9.sinaimg.cn%2Fbmiddle%2F5ceba31bg5d6503750788&refer=http%3A%2F%2Fs9.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614318742&t=5f525e34b863967c6290b1405cd55563',
    userName: 'QIAOCHUN',
    content: val,
    like: 0,
    time: new Date().getTime(),
    isLike: true,
    isCollection: false,
  }])}} likeNum={mock.likeNum} collectionNum={mock.collectionNum} comments={mock.comments} />
    </div>
  );
}