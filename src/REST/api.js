const mainUrl = `http://5bf26792a60fe600134cdf1a.mockapi.io`;

export const api = {

    artists: {
        fetch () {
            return fetch(`${mainUrl}/artists`, {
                method: 'GET',
            });
        },
    },
    artworks: {
        fetch () {
            return fetch(`${mainUrl}/artworks`, {
                method: 'GET',
            });
        },
    },

};
