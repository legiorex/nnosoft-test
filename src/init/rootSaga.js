// Core
import { all, call } from 'redux-saga/effects';

// Watchers
import { watchArtists } from '../bus/artists/saga/watchers';

export function* rootSaga () {
    yield all([call(watchArtists)]);
}
