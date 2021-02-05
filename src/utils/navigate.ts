

export const navigateTo = ( props, pathname:any )  => {
  if(pathname === '/back'){
    window.history.go(-1);
    return;
  }
  props.history.push({
    pathname,
  });
};