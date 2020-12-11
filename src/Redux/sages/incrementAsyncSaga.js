import { put, takeEvery, all, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { addTodo, showData } from '../creatAction';
import * as ct from '../creatAction/action';

function getData() {
  return fetch("/api/test/profile",{
    method:"GET",
    credentials: 'include'
  }).then((response)=>{
      console.log(response);
      return response.json()
  }).then((response)=>{
      console.log(response)
      return response;
  }).catch((error)=>{
      console.log(error)
  })

}

// Our worker Saga: 将执行异步的 increment 任务
function* incrementAsync() {
  const resData = yield call(getData);
  console.log(resData.user)
  yield put(showData(resData.user));
  // yield put(addTodo(1))
}

// Our watcher Saga: 在每个 INCREMENT_ASYNC action spawn 一个新的 incrementAsync 任务
export default function* watchIncrementAsync() {
  yield takeEvery(ct.ASYNC_TODO, incrementAsync)
}