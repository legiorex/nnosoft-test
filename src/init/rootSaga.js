// Core
import { all, call } from 'redux-saga/effects';

// Watchers
import { watchArtists } from '../bus/artists/saga/watchers';
import { watchArtworks } from '../bus/artworks/saga/watchers';
import { watchNotes } from '../bus/notes/saga/watchers';

export function* rootSaga () {
    yield all([call(watchArtists), call(watchArtworks), call(watchNotes)]);
}
