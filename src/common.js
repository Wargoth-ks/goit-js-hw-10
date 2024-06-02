const api = {
    BASE_URL: 'https://api.thecatapi.com/v1',
};

const common = {
    listCats: document.querySelector('.breed-select'),
    catInfo: document.querySelector('.cat-info'),
    catLoader: document.querySelector('.loader'),
    catError: document.querySelector('.error'),
};

export { common, api };
