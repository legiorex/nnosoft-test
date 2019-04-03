// Components
import { types } from "./types";

const initialState = ["note 1", "note 2", "note 3", "note 4"];

export const notesReducer = (state = initialState, action) => {

    const stateUpdate = [];

    switch (action.type) {
        case types.ADD_NOTE:
            state.splice(Number(action.payload.indexNote) + 1, 0, action.payload.text);

            return stateUpdate.concat(state);

        case types.SEND_NOTES:
            return action.payload;
        default:
            return state;
    }
};
// action.payload.indexNote
// return [
//     ...state.slice(0, action.payload.indexNote + 1),
//     action.payload.text,
//     ...state.slice(action.payload.indexNote)
// ];
