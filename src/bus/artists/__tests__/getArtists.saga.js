//Core
import { apply } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';

// Instruments
import { api } from '../../../REST';

// Saga
import { getArtists } from '../saga/workers';

describe('artworks saga:', () => {

    test('should complete a 200 status response scenario', async () => {
        await expectSaga(getArtists)
            .provide([[apply(api, api.artists.fetch), __.fetchResponseSuccessArtists]])
            .run();
    });
    test('should complete a 401 status response scenario', async () => {
        await expectSaga(getArtists)
            .provide([[apply(api, api.artists.fetch), __.fetchResponseFail401]])
            .run();
    });
});
