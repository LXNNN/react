import * as ct from '../creatAction/action';
const accounRducer = (state=0, action) => {
  switch (action.type) {
    case ct.ADD_TODO: return state + 1;
    case ct.DEL_TODO: return state - 1;
    default: return state;
  }
};

export default accounRducer;