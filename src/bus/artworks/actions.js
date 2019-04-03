// Types
import { types } from "./types";

export const artworksActions = {

    // Sync

    fillArtworks: (artworks) => {
        return {
            type:    types.FILL_ARTWORKS,
            payload: artworks,
        };
    },

    // Async

    fetchArtworks: () => {
        return {
            type: types.FETCH_ARTWORKS_ASYNC,
        };
    },
};
