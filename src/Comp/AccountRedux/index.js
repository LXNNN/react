
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import store from '../../Redux/store';
import { addTodo, delTodo, asyncTodo } from '../../Redux/creatAction';

const Counter = (props) => {
  const { value, onIncreaseClick, user, onShowUser } = props;
  console.log('props：',props)
  return (
    <div>
      <h1>我是react-redux示例哟</h1>
      <h1>{value}</h1>
      <h1>{user}</h1>
      <button onClick={onIncreaseClick}>+</button>
      {/* <button onClick={() => store.dispatch(delTodo(1))}>-</button> */}
      <button onClick={onShowUser}>异步显示user</button>
    </div>
  )
  
};

function mapStateToProps(state, props) {
  console.log('hahhha', props)
  return {
    value: state.account,
    user: state.showUser
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(addTodo(1)),
    onShowUser: () => store.dispatch(asyncTodo(1))
  }
}


const Account = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

export default Account;
  