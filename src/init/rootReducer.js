// Core
import { combineReducers } from 'redux';

// Reducers
import { artistsReducer as artists } from '../bus/artists/reducer';
import { artworksReducer as artworks } from '../bus/artworks/reducer';
import { notesReducer as notes } from '../bus/notes/reducer';

export const rootReducer = combineReducers({
    artists,
    artworks,
    notes,
});
