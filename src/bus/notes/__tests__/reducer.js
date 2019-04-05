// Reducer
import { notesReducer } from '../reducer';

// Actions
import { notesActions } from '../actions';

const initialState = ["note 1", "note 2", "note 3", "note 4"];

describe('notes reducer:', () => {
    test('should return initial state by default', () => {
        expect(notesReducer(void 0, {})).toEqual(initialState);
    });

    test('should handle ADD_NOTE action', () => {
        const stateUpdate = [];

        initialState.splice(Number(__.note.indexNote) + 1, 0, __.note.text);

        expect(notesReducer(void 0, notesActions.addNote(__.note))).toEqual(stateUpdate.concat(initialState));
    });

    test('should handle SEND_NOTES action', () => {
        expect(notesReducer(void 0, notesActions.sendNotes(__.notes))).toEqual(__.notes);
    });
});
