// Reducer
import { artworksReducer } from '../reducer';

// Actions
import { artworksActions } from '../actions';

const initialState = [];

describe('artworks reducer:', () => {
    test('should return initial state by default', () => {
        expect(artworksReducer(void 0, {})).toEqual(initialState);
    });

    test('should handle FILL_ARTWORKS action', () => {
        expect(artworksReducer(void 0, artworksActions.fillArtworks(__.artworks))).toEqual(__.artworks);
    });
});
