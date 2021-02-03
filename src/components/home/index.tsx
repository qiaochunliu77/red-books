import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import HomeBoard from 'components/common/home-board';
import ScrollBar from 'components/common/scroll-bar';
import Gallery from 'components/common/water-flow';
import Loading from 'components/common/loading';
import ScrollView from 'components/common/scroll-view';
import * as actions from 'store/action';
import { forceCheck } from 'react-lazyload';
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper from 'swiper'; 
import { getLocation } from 'utils/map-location';
import styles from './style.module.scss';
import 'swiper/swiper.scss';

function Home(props: any): any {
  let elements = [
    { src:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fs9.sinaimg.cn%2Fbmiddle%2F5ceba31bg5d6503750788&refer=http%3A%2F%2Fs9.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614318742&t=5f525e34b863967c6290b1405cd55563', title:'123',icon:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3446442004,2207547936&fm=26&gp=0.jpg', userName: '仙女梦', star: 123, hasStar: true },
    { src:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3446442004,2207547936&fm=26&gp=0.jpg' },
    { src:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fs9.sinaimg.cn%2Fbmiddle%2F5ceba31bg5d6503750788&refer=http%3A%2F%2Fs9.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614318742&t=5f525e34b863967c6290b1405cd55563' },
    { src:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fs9.sinaimg.cn%2Fbmiddle%2F5ceba31bg5d6503750788&refer=http%3A%2F%2Fs9.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614318742&t=5f525e34b863967c6290b1405cd55563' },
    { src:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3446442004,2207547936&fm=26&gp=0.jpg' },
    { src:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fs9.sinaimg.cn%2Fbmiddle%2F5ceba31bg5d6503750788&refer=http%3A%2F%2Fs9.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614318742&t=5f525e34b863967c6290b1405cd55563' },
    { src:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3446442004,2207547936&fm=26&gp=0.jpg' },
    { src:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3446442004,2207547936&fm=26&gp=0.jpg' },
    { src:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fs9.sinaimg.cn%2Fbmiddle%2F5ceba31bg5d6503750788&refer=http%3A%2F%2Fs9.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614318742&t=5f525e34b863967c6290b1405cd55563' },
    { src:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3446442004,2207547936&fm=26&gp=0.jpg' },
    { src:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fs9.sinaimg.cn%2Fbmiddle%2F5ceba31bg5d6503750788&refer=http%3A%2F%2Fs9.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614318742&t=5f525e34b863967c6290b1405cd55563' },
    { src:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fs9.sinaimg.cn%2Fbmiddle%2F5ceba31bg5d6503750788&refer=http%3A%2F%2Fs9.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614318742&t=5f525e34b863967c6290b1405cd55563' },
    { src:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3446442004,2207547936&fm=26&gp=0.jpg' },
    { src:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fs9.sinaimg.cn%2Fbmiddle%2F5ceba31bg5d6503750788&refer=http%3A%2F%2Fs9.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614318742&t=5f525e34b863967c6290b1405cd55563' },
    
  ];
  let scrollTags = ['推荐', '附近', '视频', '美食', '旅行','推荐', '附近', '视频', '美食', '旅行','推荐', '附近', '视频'];
  let headertags = ['关注', '发现'];
  const { userInfo, getUserInfo } = props; // 获取用户信息
  const [loading, setIsLoading ] = useState<boolean>(true); // 设置loading状态
  const [city, setCity] = useState<string>('上海'); // 定位城市，默认上海
  // const [Display, setDisplay] = useState(0);
  const [currentTab, setCurrenttab] = useState<number>(0); // 点击头部切换索引
  const [updateSlide, setUpdateSlide] = useState<number>((new Date()).getTime()); // 控制slide是否需要刷新
  // const [slideChangIndex, setSlideChangeIndex] = useState<number>(0); // 滑动时的索引

  headertags.push(city);
  useEffect(() => {
    setIsLoading(false);
    setCity(getLocation());
  },[userInfo, currentTab]);

  // 向子组件传入的回调，父组件拿到数据
  const handleTab = (index) => {
    setCurrenttab(index);
    // 
    setUpdateSlide((new Date()).getTime());
    console.log('////',index);
  };
  // const  handlePullUp = () => {
  //   console.log('handlePullUp');
  // };
  // const handlePullDown =() => {
  //   console.log('handlePullDown');
  // };
  // const uploading = () => {
  //   return true;
  //   console.log('uploading');
  // };
  return (
   <div className={styles.homeBox}>
      <HomeBoard tags={headertags} currentTab={currentTab} handleTab={handleTab} />
      <ScrollBar tags={scrollTags} />
      <div>
        {/* <ScrollView direction="vertical"
          refresh={false}
          onScroll={(e) => {
                      console.log("滚动高度.",e);
                      if (e.y < -1142)
                          setDisplay(1);
                      else
                          setDisplay(0);
                      forceCheck();
                  }}
          pullUp={handlePullUp}
          pullDown={handlePullDown}
          pullUpLoading={uploading}
        > */}
          {
            loading ? <Loading /> : (
              <Swiper
                initialSlide={currentTab}
                slidesPerView={1}
                onSlideChange={(i) => {setCurrenttab(i.activeIndex);}}
                // 添加key属性控制，当点击tab时手动刷新轮播。
                key={updateSlide}
              >
                {/* {
                  [1,2,3].map((item, index) => {
                    return (
                      <SwiperSlide key={`${item}${index}`} data-hash={index}>
                        <Gallery elements={elements} />
                      </SwiperSlide>
                    );
                  })
                } */}
                <SwiperSlide>
                  <Gallery elements={elements} />
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
        {/* </ScrollView> */}
      </div>

   </div>
  );
}
const mapStateToProps = (state) => ({
  userInfo: state.userInfo,
});
const mapDispatchToProps = (disptach) => {
  return {
    getUserInfo() {
      disptach(actions.changeUserInfo());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);