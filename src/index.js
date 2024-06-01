// live_ANH48hIXDEm2eu0HS7UN2q6nHT50BC7cCUFg9Yks2LDuWHtFraaoOVrP4F4Y8FCL

import { fetchBreeds, fetchCatByBreed } from './cat-api';
import { common } from './common';
// import Notiflix from 'notiflix';
// import axios from 'axios';

const { listCats, catError, catLoader, catInfo } = common;

listCats.hidden = true;
catError.hidden = true;
catLoader.hidden = false;

fetchBreeds()
    .then(array => {
        catLoader.hidden = true;
        listCats.hidden = false;
        listCats.insertAdjacentHTML('beforeend', markup(array));
        // console.dir(array);
    })
    .catch(err => {
        catError.hidden = false;
        catLoader.hidden = true;
        console.dir(err);
    });

function markup(arr) {
    return arr
        .map(
            ({ id, name }) =>
                `<option value=${id}>
                ${name}
            </option>`
        )
        .join('');
}

listCats.addEventListener('change', onChange);

function onChange(event) {
    catInfo.innerHTML = '';
    const catId = event.currentTarget.value;
    // console.dir(catId);
    fetchCatByBreed(catId)
        .then(catId => {
            // console.dir([...catId][0]);
            const cats = catId[0].breeds;
            catLoader.hidden = true;
            listCats.hidden = false;
            catInfo.insertAdjacentHTML('beforeend', markupCat(cats));
        })
        .catch(err => {
            catError.hidden = false;
            catLoader.hidden = true;
            console.dir(err);
        });
}

function markupCat(arr) {
    // console.dir(arr);
    return arr
        .map(
            ({ name, description, temperament, reference_image_id }) =>
                `<h2>${name}</h2>
            <p>${description}</p>
            <p>Temperament: ${temperament}</p>
            <img src="${reference_image_id}" alt="${reference_image_id}">`
        )
        .join('');
}

export { listCats, catLoader };
