import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* changeinclusive(action) {
  console.log(
    'i hope its an for the inclusive number i want id',
    action.payload
  );
  try {
    yield axios.put(`/api/parksnplay/inclusive/${action.payload.targetId}`);

    yield put({
      type: 'FETCH_INCLUSIVE',
      payload: action.payload.locationId,
    });
  } catch (error) {
    console.log('Danger issues with the changing the inclusvie stuff', error);
  }
}

function* changeinclusiveSaga() {
  yield takeLatest('CHANGE_INCLUSIVE', changeinclusive);
}

export default changeinclusiveSaga;
