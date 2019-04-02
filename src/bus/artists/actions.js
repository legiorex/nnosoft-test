// Types
import { types } from "./types";

// Instruments
export const artistsActions = {

    // Sync

    fillPosts: (artists) => {
        return {
            type:    types.FILL_POSTS,
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
