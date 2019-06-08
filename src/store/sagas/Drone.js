import * as actions from '../actions';
import API from '../api';
import { takeEvery, call, put, cancel, all } from 'redux-saga/effects';

function* watchDroneDataUpdate(action) {
    const { data } = action;
    yield put({ type: actions.UPDATE_DRONE, data });
}

function* fetchDroneData() {
    const { error, data } = yield call(API.fetchDrone);
    if (error) {
        yield put({ type: actions.API_ERROR, code: error.code });
        yield cancel();
        return;
    }
    yield put({ type: actions.DRONE_DATA_RECEIVED, data });
}

function* watchDroneDataLoad() {
    yield all([
        takeEvery(actions.FETCH_DRONE, fetchDroneData),
        takeEvery(actions.DRONE_DATA_RECEIVED, watchDroneDataUpdate)
    ]);
}

export default [watchDroneDataLoad];