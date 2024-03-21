import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchParksNPlay() {
  try {
    const parksnplayResponse = yield axios.get(
      `/api/parksnplay/${action.payload}`
    );
    yield put({
      type: 'SET_PARKS_N_PLAY',
      payload: parksnplayResponse.data,
    });
  } catch (error) {
    console.log('Danger issues with the parks and play info', error);
  }
}

function* parksnplaySaga() {
  yield takeLatest('FETCH_PARK_N_PLAY', fetchParksNPlay);
}

export default parksnplaySaga;
