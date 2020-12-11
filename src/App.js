import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch, Link, Redirect } from 'react-router-dom';
// import  reducer from './Redux/reducer';
// import { addTodo } from './Redux/creatAction';
import store from './Redux/store';
import Account from './Comp/Account';
import AccoutRedux from './Comp/AccountRedux';
import './App.css';
let { subscribe, dispatch, getState } = store;

class App extends Component {
  componentDidMount(){
    // fetch("/api/test/profile",{
    //   method:"GET",
    //   credentials: 'include'
    // }).then((response)=>{
    //     console.log(response);
      
    //     return response.json()
    // }).then((response)=>{
    //     console.log(response)
    // }).catch((error)=>{
    //     console.log(error)
    // })
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
              {/* <Route path='/' exact component={Home}></Route> */}
              <Switch> 
                <Route path='/redux' exact component={Account}></Route>
                <Route path='/reduxRedux' exact component={AccoutRedux}></Route>
                <Redirect to="/redux" from='/' exact /> 
              </Switch>
            
          </div>
        </HashRouter>
      </Provider>
    );
  }

}

export default App;
