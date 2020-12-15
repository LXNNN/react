import React, { Component, Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch, Link, Redirect } from 'react-router-dom';
// import  reducer from './Redux/reducer';
// import { addTodo } from './Redux/creatAction';
import store from './Redux/store';
// import Account from './Comp/Account';
// import AccoutRedux from './Comp/AccountRedux';
// import Topics from './Comp/Topics';
import './App.css';
let { subscribe, dispatch, getState } = store;

//懒加载
const ReduxComp = lazy(() => import('./Comp/Account'));
const ReactReduxComp = lazy(() => import('./Comp/AccountRedux'));
const TopicsComp = lazy(() => import('./Comp/Topics'));

class App extends Component {
  componentDidMount(){

  }
  render() {
    let data = getState();
    console.log('页面数据：',data)
    return (
      <Provider store={store}>
        <HashRouter>
          <div className="App">
            hello react
            <br />
            <Link to='/redux'>
              <span>redux示例</span>
            </Link>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <Link to='/reduxRedux'>
              <span>react-redux示例</span>
            </Link>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <Link to='/topics'>
              <span>router嵌套示例</span>
            </Link>
            {/* <div>{data.account}</div>
            <div>
              <button onClick={() => store.dispatch(addTodo(1))}>+</button>
            </div> */}
            {/* <br />
            _____________________________________________________________________
            redux
            _____________________________________________________________________
            <Account />
            <br />
            _____________________________________________________________________
            react-redux
            _____________________________________________________________________
            <AccoutRedux /> */}
            <Suspense fallback={<div>Loading...</div>}>
              <Switch> 
                <Route path='/redux' component={ReduxComp}></Route>
                <Route path='/reduxRedux' component={ReactReduxComp}></Route>
                <Route path='/topics' component={TopicsComp}></Route>
                <Redirect to="/redux" from='/' exact /> 
              </Switch>
            </Suspense>
          </div>
        </HashRouter>
      </Provider>
    );
  }

}

export default App;
