import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchReview(action) {
  try {
    const reviewResponse = yield axios.get(
      `/api/parksnplay/review/${action.payload}`
    );
    yield put({
      type: 'SET_REVIEW',
      payload: reviewResponse.data,
    });
  } catch (error) {
    console.log('Danger issues with review', error);
  }
}

function* reviewSaga() {
  yield takeLatest('FETCH_REVIEW', fetchReview);
}

export default reviewSaga;
