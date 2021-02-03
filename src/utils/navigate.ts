

export const navigateTo = ( props, pathname : any) => {
  props.history.push({
    pathname,
  });
};