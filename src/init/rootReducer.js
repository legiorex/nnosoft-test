// Core
import { combineReducers } from 'redux';

// Reducers
import { artistsReducer as artists } from '../bus/artists/reducer';

export const rootReducer = combineReducers({
    artists,
});
