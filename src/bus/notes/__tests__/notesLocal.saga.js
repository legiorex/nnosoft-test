//Core
import { expectSaga } from 'redux-saga-test-plan';

// Saga
import { notesLocal } from '../saga/workers';

describe('notes saga:', () => {

    test('get data from state', async () => {
        await expectSaga(notesLocal)
            .apply(localStorage, localStorage.setItem, ['notes', JSON.stringify(__.notes)])
            .run();
    });

});
