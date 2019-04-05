// Types
import { types } from '../types';

// Actions
import { notesActions } from '../actions';

describe(' notes actions', () => {
    test('addNote', () => {
        expect(notesActions.addNote(__.note)).toMatchSnapshot();
    });

    test('writeNotesLocal', () => {
        expect(notesActions.writeNotesLocal()).toMatchSnapshot();
    });
    test('sendNotes', () => {
        expect(notesActions.sendNotes(__.notes)).toMatchSnapshot();
    });
});
