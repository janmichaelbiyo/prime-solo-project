import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* deleteinclusive(action) {
  console.log(
    'i hope its an for the inclusive number i want id',
    action.payload
  );
  try {
    yield axios.delete(`/api/parksnplay/inclusive/${action.payload.targetId}`);

    yield put({
      type: 'FETCH_INCLUSIVE',
      payload: action.payload.locationId,
    });
  } catch (error) {
    console.log('Danger issues with the deleting the inclusvie stuff', error);
  }
}

function* deleteinclusiveSaga() {
  yield takeLatest('DELETE_INCLUSIVE', deleteinclusive);
}

export default deleteinclusiveSaga;
