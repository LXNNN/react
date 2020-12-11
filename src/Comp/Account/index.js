
import React, { useState, useEffect } from 'react';
import store from '../../Redux/store';
import { addTodo, delTodo, asyncTodo } from '../../Redux/creatAction';

export default () => {
  console.log(store.getState())
  return (
    <div>
      <h1>我是单纯的redux示例哟</h1>
      <h1>{store.getState().account}</h1>
      <h1>{store.getState().showUser}</h1>
      <button onClick={() => store.dispatch(addTodo(1))}>+</button>
      <button onClick={() => store.dispatch(delTodo(1))}>-</button>
      <button onClick={() => store.dispatch(asyncTodo(1))}>异步加一</button>
    </div>
  )
  
  };
  