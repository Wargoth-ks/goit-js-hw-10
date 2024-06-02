import { common, api } from './common';

const { BASE_URL, API_KEY } = api;

const { catLoader, listCats } = common;

async function fetchBreeds() {
    const resp = await fetch(`${BASE_URL}/breeds`);
    if (!resp.ok) {
        // console.dir(resp.statusText);
        throw new Error(resp.statusText);
    }
    return await resp.json();
}

async function fetchCatByBreed(breedId) {
    catLoader.hidden = false;
    listCats.hidden = true;
    const resp = await fetch(
        `${BASE_URL}/images/search?breed_ids=${breedId}&api_key=${API_KEY}`
    );
    if (!resp.ok) {
        throw new Error(resp.statusText);
    }
    return await resp.json();
}

export { fetchBreeds, fetchCatByBreed };
