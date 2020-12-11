import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer';
// import { helloSaga } from '../Redux/sages';
import rootSaga from './sages';
// 安装redux-devtools-extension的可视化工具。
import { composeWithDevTools } from 'redux-devtools-extension';

// 配合浏览器插件
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();


const initValues = {
    stateInfo : '',
    trapInfo : '',
    stationName : '',
    account: 0,
    showUser: 'haha'
}

// const store = createStore(reducer, initValues, composeEnhancers());
const store = createStore(reducer, initValues, composeEnhancers(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga)
export default store;