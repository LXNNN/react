import * as ct from './action';

export function addTodo(text) {
  return {
    type: ct.ADD_TODO,
    text
  }
}

export function delTodo(text) {
  return {
    type: ct.DEL_TODO,
    text
  }
}


export function asyncTodo(text) {
  return {
    type: ct.ASYNC_TODO,
    text
  }
}

export function showData(text) {
  return {
    type: ct.ASYNC_USER,
    text
  }
}