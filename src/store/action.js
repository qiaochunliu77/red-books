import * as CONSTANTS from 'store/constants';

const getUser = (data) => ({
  type: CONSTANTS.USER_INFO,
  data,
});

export const changeUserInfo = () => {
  return dispatch => {
    const list = { name: '二哈哈哈' };
    dispatch(getUser(list));
  };
};