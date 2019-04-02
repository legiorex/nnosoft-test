// Core
import { fromJS, List } from 'immutable';

// Instruments
import { types } from "./types";

const initialState = [];

export const artistsReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.FILL_ARTISTS:
            return action.payload;

        default:
            return state;
    }
};
