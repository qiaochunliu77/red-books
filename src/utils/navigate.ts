import moment from 'moment';

export default moment.updateLocale('en', {
    relativeTime : {
        future: "in %s",
        past:   "%s ",
        s  : '刚刚',
        ss : '%d 秒前',
        m:  "1分钟前",
        mm: "%d 分钟前",
        h:  "an 小时前",
        hh: "%d 小时前",
        d:  "a 天前",
        dd: "%d 天前",
        M:  "a 个月前",
        MM: "%d 个月前",
        y:  "a year",
        yy: "%d years"
    }
  });

export const navigateTo = ( props, pathname:any )  => {
  if(pathname === '/back'){
    window.history.go(-1);
    return;
  }
  props.history.push({
    pathname,
  });
};