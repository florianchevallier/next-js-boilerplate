import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { loginActions as actions } from '.';
import { IRandomData } from './types';

function* doSomething() {
  const url = "https://quotes.rest/qod";

  try {
    const response: IRandomData = yield call(request, url);
    yield put(actions.getRandomDataSuccess(response));
  } catch (err) {
    yield put(actions.getRandomDataError());
  }

}

export function* loginSaga() {
  yield takeLatest(actions.getRandomData.type, doSomething);
}
