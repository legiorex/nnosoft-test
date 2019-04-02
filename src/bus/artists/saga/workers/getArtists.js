//Core
import { put, apply } from 'redux-saga/effects';

// Instruments
import { api } from '../../../../REST';

// Actions
import { artistsActions } from '../../actions';

export function* getArtists () {

    try {
        const response = yield apply(api, api.artists.fetch);
        const result = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error();
        }

        yield put(artistsActions.fillArtists(result));

    } catch (error) {
        // В случае не верного ответа сервера ошибку можно обработать, в данном случае выведится в консоль
        yield console.log(error);

    }
}
