//Core
import { put, apply } from 'redux-saga/effects';

// Instruments
import { api } from '../../../../REST';


export function* getArtists () {
    // try {
    //     yield put(uiActions.startFetching());
    //     const response = yield apply(api, api.posts.fetch);
    //     const result = yield apply(response, response.json);

    //     if (response.status !== 200) {
    //         throw new Error(message);
    //     }

    //     yield put(postsActions.fillPosts(result.data));

    // } catch (error) {

    //     yield put(uiActions.emitError(error, 'getPosts worker'));

    // } finally {
    //     yield put(uiActions.stopFetching());
    // }

}
