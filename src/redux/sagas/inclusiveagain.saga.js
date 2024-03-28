import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchInclusiveagain(action) {
  try {
    const inclusiveResponse = yield axios.get(
      `/api/parksnplay/inclusive/again/${action.payload}`
    );
    yield put({
      type: 'SET_INCLUSIVE_AGAIN',
      payload: inclusiveResponse.data,
    });
  } catch (error) {
    console.log('Danger issues with inclusive again', error);
  }
}

function* inclusiveagainSaga() {
  yield takeLatest('FETCH_INCLUSIVE_AGAIN', fetchInclusiveagain);
}

export default inclusiveagainSaga;
