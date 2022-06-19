import axios from 'axios';

const API_KEY = 'k_0qxp23ox';
const API_URL = 'https://imdb-api.com/en/API';
const options = {
    mode: 'no-cors',
    headers: {
        Accept: 'application/json',
    },
};

export default {
    get: (url) =>
        axios.get(API_URL + url + API_KEY, {
            ...options,
        }),
    getInfo: (url, param) =>
        axios.get(API_URL + url + API_KEY + '/' + param, {
            ...options,
        }),
};
