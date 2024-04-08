import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchPicture(action) {
  try {
    const picturesResponse = yield axios.get(
      `/api/parksnplay/pictures/${action.payload}`
    );
    yield put({
      type: 'SET_PICTURES',
      payload: picturesResponse.data,
    });
  } catch (error) {
    console.log('Danger issues with the pictures info', error);
  }
}

function* picturesSaga() {
  yield takeLatest('FETCH_PICTURES', fetchPicture);
}

export default picturesSaga;
