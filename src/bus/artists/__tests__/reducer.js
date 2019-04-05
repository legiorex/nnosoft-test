// Reducer
import { artistsReducer } from '../reducer';

// Actions
import { artistsActions } from '../actions';

describe('artists reducer:', () => {
    test('should return initial state by default', () => {
        expect(artistsReducer(void 0, {})).toMatchSnapshot();
    });

    test('should handle FILL_ARTISTS action', () => {
        expect(artistsReducer(void 0, artistsActions.fillArtists(__.artists))).toMatchSnapshot();
    });
});
