
import { takeEvery, takeLatest } from 'redux-saga/effects'
import { CLASSES_REQUEST, FILTER_CLASSES } from '../constants';
import fetchClasses, {filterClasses} from './getClasses'
export function* Saga() {
  // Allows concurrent fetches of users
  // yield takeEvery(CLASSES_REQUEST, fetchClasses);

  // Does not allow concurrent fetches of users
  yield takeLatest(CLASSES_REQUEST, fetchClasses);
  yield takeLatest(FILTER_CLASSES, filterClasses);
}

export default Saga;
