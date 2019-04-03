// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Type
import { types } from '../types';

// Workers
import { notesLocal } from "./workers";

function* watchNotesLocal () {
    yield takeEvery(types.WRITE_NOTES_LOCAL, notesLocal);
}

export function* watchNotes () {
    yield all([call(watchNotesLocal)]);
}
