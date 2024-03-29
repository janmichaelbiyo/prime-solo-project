import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* postreview(action) {
  try {
    yield axios({
      method: 'POST',
      url: '/api/parksnplay/review/',
      data: action.payload,
    });
    yield put({ type: 'FETCH_REVIEW', payload: action.payload.locationId });
  } catch (error) {
    console.log('mistake at the post', error);
  }
}

function* postreviewSaga() {
  yield takeLatest('POST_REVIEW', postreview);
}

export default postreviewSaga;
