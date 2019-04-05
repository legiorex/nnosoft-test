// Actions
import { artistsActions } from '../actions';

describe(' artists actions', () => {
    test('fillArtists', () => {
        expect(artistsActions.fillArtists(__.artists)).toMatchSnapshot();
    });

    test('fetchArtists', () => {
        expect(artistsActions.fetchArtists()).toMatchSnapshot();
    });
});
