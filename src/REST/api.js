const url = `http://5bf26792a60fe600134cdf1a.mockapi.io/artists`;

export const api = {

    artists: {
        fetch () {
            return fetch(url, {
                method: 'GET',
            });
        },
    },

};
