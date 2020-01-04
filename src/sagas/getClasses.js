import { put, call } from 'redux-saga/effects';

import { CLASSES_SUCCESS,CLASSES_FAILED, FILTER_CLASSES_SUCCESS } from '../constants';
import { getClasses } from '../lib';



export default function* fetchClasses() {
    try {
      const {classes=[]} = yield call(getClasses);
        yield put({type: CLASSES_SUCCESS, classes});
    } catch (e) {
        yield put({type: CLASSES_FAILED, error: e.message});
    }
}
export function* filterClasses() {
        yield put({type: FILTER_CLASSES_SUCCESS});
}

