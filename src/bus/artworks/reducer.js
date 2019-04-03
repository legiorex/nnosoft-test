// Components
import { types } from "./types";

const initialState = [];

export const artworksReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.FILL_ARTWORKS:
            return action.payload;

        default:
            return state;
    }
};
