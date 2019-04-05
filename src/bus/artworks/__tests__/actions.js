// Types
import { types } from '../types';

// Actions
import { artworksActions } from '../actions';

describe(' artworks actions', () => {
    test('fillArtworks', () => {
        expect(artworksActions.fillArtworks(__.artworks)).toEqual({
            type:    types.FILL_ARTWORKS,
            payload: __.artworks,
        });
    });

    test('fetchArtworks', () => {
        expect(artworksActions.fetchArtworks()).toEqual({
            type: types.FETCH_ARTWORKS_ASYNC,
        });
    });
});
