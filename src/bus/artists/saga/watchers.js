// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Type
import { types } from '../types';

// Workers
import { getArtists } from "./workers";

function* watchGetArtists () {
    yield takeEvery(types.FETCH_ARTISTS_ASYNC, getArtists);
}

export function* watchArtists () {
    yield all([call(watchGetArtists)]);
}
