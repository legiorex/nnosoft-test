export const ADD_NOTE = "ADD_NOTE";

export function addNote (text, afterIndex) {
    return {
        type: ADD_NOTE,
        text,
        afterIndex,
    };
}
