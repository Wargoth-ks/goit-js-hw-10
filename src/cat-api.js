import { common, api } from './common';
require('dotenv').config();

const api_key = process.env.API_KEY;

const { BASE_URL } = api;

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
        `${BASE_URL}/images/search?breed_ids=${breedId}&api_key=${api_key}`
    );
    if (!resp.ok) {
        throw new Error(resp.statusText);
    }
    return await resp.json();
}

export { fetchBreeds, fetchCatByBreed };
