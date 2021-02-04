import React,{ useState, useEffect } from 'react';
import IconFont from 'components/common/svg';
import HomeBoard from 'components/common/home-board';
import Loading from 'components/common/loading';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from 'components/common/card';
import styles from 'components/auth/style.module.scss';

export default function Auth() {
  const focusMock = [{ txt: '关注', number: 36 },{ txt:'粉丝', number: 13 },{ txt: '获赞与收藏', number: 8 }];
  const [loading, setIsLoading ] = useState<boolean>(true); // 设置loading状态
  const [currentTab, setCurrenttab] = useState<number>(0); // 点击头部切换索引
  const [updateSlide, setUpdateSlide] = useState<number>((new Date()).getTime()); // 控制slide是否需要刷新
  let elements = [
    { acticleId: '1',src:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fs9.sinaimg.cn%2Fbmiddle%2F5ceba31bg5d6503750788&refer=http%3A%2F%2Fs9.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614318742&t=5f525e34b863967c6290b1405cd55563', title:'今天你吃饭了吗今天你吃饭了吗今天你吃饭了吗',icon:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3446442004,2207547936&fm=26&gp=0.jpg', userName: '七亿少女的梦七亿少女的梦', star: 109, hasStar: true },
    { acticleId: '2',src:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fs9.sinaimg.cn%2Fbmiddle%2F5ceba31bg5d6503750788&refer=http%3A%2F%2Fs9.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614318742&t=5f525e34b863967c6290b1405cd55563', title:'今天你吃饭了吗',icon:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3446442004,2207547936&fm=26&gp=0.jpg', userName: '仙女梦', star: 1099, hasStar: true },
    { acticleId: '3',src:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fs9.sinaimg.cn%2Fbmiddle%2F5ceba31bg5d6503750788&refer=http%3A%2F%2Fs9.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614318742&t=5f525e34b863967c6290b1405cd55563', title:'今天你吃饭了吗',icon:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3446442004,2207547936&fm=26&gp=0.jpg', userName: '仙女梦', star: 109, hasStar: true },
    { acticleId: '4',src:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fs9.sinaimg.cn%2Fbmiddle%2F5ceba31bg5d6503750788&refer=http%3A%2F%2Fs9.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614318742&t=5f525e34b863967c6290b1405cd55563', title:'今天你吃饭了吗',icon:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3446442004,2207547936&fm=26&gp=0.jpg', userName: '仙女梦', star: 109, hasStar: true },
    { acticleId: '5',src:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fs9.sinaimg.cn%2Fbmiddle%2F5ceba31bg5d6503750788&refer=http%3A%2F%2Fs9.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614318742&t=5f525e34b863967c6290b1405cd55563' },
    { acticleId: '6',src:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3446442004,2207547936&fm=26&gp=0.jpg' },
    { src:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fs9.sinaimg.cn%2Fbmiddle%2F5ceba31bg5d6503750788&refer=http%3A%2F%2Fs9.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614318742&t=5f525e34b863967c6290b1405cd55563' }, 
  ];
  let headertags = ['笔记', '收藏', '赞过'];

  useEffect(() => {
    setIsLoading(false);
  },[currentTab]);

  // 向子组件传入的回调，父组件拿到数据
  const handleTab = (index) => {
    setCurrenttab(index);
    // 
    setUpdateSlide((new Date()).getTime());
    console.log('////',index);
  };

  return (
   <div className={styles.container}>

     <div className={styles.infoList}>
      <div className={styles.menu}>
        <div className={styles.change}>👉 点此更换背景图片</div>
        <div className={styles.gengduo}>
          <IconFont type='icongengduo' className={styles.share} />
        </div>
        <div className={styles.gengduo}>
          <IconFont type='iconfenxiang' className={styles.share} style={{ fontSize: '.67rem' }} />
        </div>
      </div>

      <div className={styles.user}>
        <div className={styles.avatar}>
          <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fs9.sinaimg.cn%2Fbmiddle%2F5ceba31bg5d6503750788&refer=http%3A%2F%2Fs9.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614318742&t=5f525e34b863967c6290b1405cd55563', title:'今天你吃饭了吗今天你吃饭了吗今天你吃饭了吗',icon:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3446442004,2207547936&fm=26&gp=0.jpg" alt="" className={styles.avatarImg} />
        </div>
        <div className={styles.info}>
          <div className={styles.name}>Helloney</div>
          <div className={styles.number}>小红书号：3829484</div>
          <div>
            <div className={styles.title}>
            <IconFont type='iconxunzhang' style={{ fontSize: '.3rem' }} />
            <div>困困薯</div>
            <IconFont type='iconyoujiantou' style={{ fontSize:'.3rem' }} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.editor}>去编辑个人资料完善个人简介吧</div>

      <div className={styles.wrap}>
        <div className={styles.cardList}>
          {
            focusMock.map((item, index) => (
              <div key={index} className={styles.card}>
                <div>{item.number}</div>
                <div style={{ color: 'rgb(249,249,249)' }}>{item.txt}</div>
              </div>
            ))
          }
        </div>
        <div className={styles.button}>
          <div className={styles.btn}>编辑资料</div>
          <div className={styles.btn}>
            <IconFont type='iconicon-test' style={{ fontSize: '.45rem' }} />
          </div>
        </div>
      </div>
     </div>
     <HomeBoard tags={headertags} currentTab={currentTab} handleTab={handleTab}  />

     <div className={styles.cardWrap}>
     {
        loading ? <Loading /> : (
          <Swiper
            initialSlide={currentTab}
            slidesPerView={1}
            onSlideChange={(i) => {setCurrenttab(i.activeIndex);}}
            // 添加key属性控制，当点击tab时手动刷新轮播。
            key={updateSlide}
          >
            <SwiperSlide>
              <Card elements={elements} />
            </SwiperSlide>
            <SwiperSlide>
              <div>1223</div>
            </SwiperSlide>
            <SwiperSlide>
              <div>334</div>
            </SwiperSlide>
          </Swiper>
        )
     }
     </div>

   </div>
  );
}