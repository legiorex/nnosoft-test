// Core
import { createStore, combineReducers } from 'redux';

// Reducers
import { artistsReducer as artists } from '../../bus/artists/reducer';
import { artworksReducer as artworks } from '../../bus/artworks/reducer';
import { notesReducer as notes } from '../../bus/notes/reducer';

// Store
import { store } from '../store';

const referenceRootReducer = combineReducers({
    artists,
    artworks,
    notes,
});

const referenceStore = createStore(referenceRootReducer);

describe('store:', () => {
    test('should have valid state shape', () => {
        expect(store.getState()).toEqual(referenceStore.getState());
    });
});
// "test": "jest --config=\"./config/jest/jest.test.config.json\""
// "setupFiles": [
//     "react-app-polyfill/jsdom"
//   ],
