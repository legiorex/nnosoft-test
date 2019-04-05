//Core
import { apply } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';

// Instruments
import { api } from '../../../REST';

// Saga
import { getArtworks } from '../saga/workers';

describe('artworks saga:', () => {

    test('should complete a 200 status response scenario', async () => {
        await expectSaga(getArtworks)
            .provide([[apply(api, api.artworks.fetch), __.fetchResponseSuccessArtworks]])
            .run();
    });
    test('should complete a 401 status response scenario', async () => {
        await expectSaga(getArtworks)
            .provide([[apply(api, api.artworks.fetch), __.fetchResponseFail401]])
            .run();
    });
});
