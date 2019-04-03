//Core
import { apply, select } from 'redux-saga/effects';

export function* notesLocal () {
    const notes = yield select((state) => state.notes);

    yield apply(localStorage, localStorage.setItem, ['notes', JSON.stringify(notes)]);

}
