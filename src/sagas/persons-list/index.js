import { put, call, takeEvery, all } from "redux-saga/effects";
import * as types from "../../const/actions";
import * as services from "../../services/api";

function* personsListFetched() {
  const payload = yield call(services.fetchPersonsList);
  
  yield put({ type: types.FETCH_PERSONS_SUCCESS, payload });
}

function* startPersonsListFetching() {
  yield takeEvery(
    types.FETCH_PERSONS_START, personsListFetched);
}

export default function* rootSaga() {
  yield all([startPersonsListFetching()]);
}
