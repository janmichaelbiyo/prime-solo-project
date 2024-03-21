import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// this saga will fetch all the map locations

function* fetchAllLocation() {
  try {
    const locationResponse = yield axios.get('/api/map');
    yield put({
      type: 'SET_LOCATIONS',
      payload: locationResponse.data,
    });
  } catch (error) {
    console.log('locations fetching doesnt work', error);
  }
}

function* locationSaga() {
  yield takeLatest('FETCH_LOCATIONS', fetchAllLocation);
}

export default locationSaga;
