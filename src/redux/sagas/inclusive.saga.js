import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchInclusive(action) {
  try {
    const inclusiveResponse = yield axios.get(
      `/api/parksnplay/inclusive/${action.payload}`
    );
    yield put({
      type: 'SET_INCLUSIVE',
      payload: inclusiveResponse.data,
    });
  } catch (error) {
    console.log('Danger issues with inclusive', error);
  }
}

function* inclusiveSaga() {
  yield takeLatest('FETCH_INCLUSIVE', fetchInclusive);
}

export default inclusiveSaga;
