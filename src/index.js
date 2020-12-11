import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Account from './Comp/Account';
import * as serviceWorker from './serviceWorker';
// import {createStore} from 'redux';
// import reducer from './Redux/reducer';
import { compose} from 'redux';
// import { Provider } from 'react-redux'
import store from './Redux/store';
import './App.css';
// 安装redux-devtools-extension的可视化工具。
// import { composeWithDevTools } from 'redux-devtools-extension';
// import { addTodo } from './Redux/Action';
// 配合浏览器插件
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


// const store = createStore(reducer, composeEnhancers());

const render = () => {
    // console.log(store.getState().account)
    ReactDOM.render(<App />, document.getElementById('root'));
}

render();
store.subscribe(render);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();

