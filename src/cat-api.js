import { common, api } from './common';

const { BASE_URL, API_KEY } = api;

const { catLoader, listCats } = common;

function fetchBreeds() {
    return fetch(`${BASE_URL}/breeds`).then(resp => {
        if (!resp.ok) {
            // console.dir(resp.statusText);
            throw new Error(resp.statusText);
        }
        // console.dir(object);
        return resp.json();
    });
}

function fetchCatByBreed(breedId) {
    catLoader.hidden = false;
    listCats.hidden = true;
    return fetch(
        `${BASE_URL}/images/search?breed_ids=${breedId}&api_key=${API_KEY}`
    ).then(resp => {
        if (!resp.ok) {
            throw new Error(resp.statusText);
        }
        return resp.json();
    });
}

export { fetchBreeds, fetchCatByBreed };
