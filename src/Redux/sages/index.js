import {all} from 'redux-saga/effects';
import helloSaga from './helloSage';
import watchIncrementAsync from './incrementAsyncSaga'


export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsync()
  ]);
}
