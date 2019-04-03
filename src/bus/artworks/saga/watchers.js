// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Type
import { types } from '../types';

// Workers
import { getArtworks } from "./workers";

function* watchGetArtworks () {
    yield takeEvery(types.FETCH_ARTWORKS_ASYNC, getArtworks);
}

export function* watchArtworks () {
    yield all([call(watchGetArtworks)]);
}
