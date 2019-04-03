// Types
import { types } from "./types";

export const notesActions = {

    // Sync

    addNote: (note) => {
        return {
            type:    types.ADD_NOTE,
            payload: note,
        };
    },

    writeNotesLocal: () => {
        return {
            type: types.WRITE_NOTES_LOCAL,
        };
    },
    sendNotes: (notes) => {
        return {
            type:    types.SEND_NOTES,
            payload: notes,
        };
    },

};
