import * as ct from '../creatAction/action';
const showUserRducer = (state='haha', action) => {
  switch (action.type) {
    case ct.ASYNC_USER: return action.text;
    default: return state;
  }
};

export default showUserRducer;