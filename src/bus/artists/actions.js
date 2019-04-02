// Types
import { types } from "./types";

// Instruments
export const artistsActions = {

    // Sync

    fillArtists: (artists) => {
        return {
            type:    types.FILL_ARTISTS,
            payload: artists,
        };
    },

    // Async

    fetchArtists: () => {
        return {
            type: types.FETCH_ARTISTS_ASYNC,
        };
    },
};
