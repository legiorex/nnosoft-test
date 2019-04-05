// Mocks
import { LocalStorage } from './mocks/localStorage';
import { fetch } from './mocks/fetch';

const errorMessage = 'TEST_ERROR_MESSAGE.';
// const token = 'TEST_TOKEN';
// const error = new Error(errorMessage);
const url = 'https://www.url.com';

const responseDataFail = {
    message: errorMessage,
};

const note = { text: 'Hello!', indexNote: '0' };

const notes = ['test']

const artists = [{
    _id:        '1',
    firstName:  'Annie',
    lastName:   'Walker',
    photo:      url,
    
}];

const artworks = [{
    _id:    '1',
    title:  'In the event of sinking',
    photo:  url}
];

const fetchResponseSuccessArtists = {
    status: 200,
    json:   jest.fn(() => Promise.resolve(artists)),
};

const fetchResponseSuccessArtworks = {
    status: 200,
    json:   jest.fn(() => Promise.resolve(artworks)),
};

const fetchResponseFail401 = {
    status: 401,
    json:   jest.fn(() => Promise.resolve(responseDataFail)),
};


global.__ = {
    artists,
    artworks,
    fetchResponseSuccessArtists,
    fetchResponseSuccessArtworks,
    fetchResponseFail401,
    note,    
    notes,    
};
global.fetch = fetch;
global.localStorage = new LocalStorage();
