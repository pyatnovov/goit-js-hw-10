import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import { Notify } from 'notiflix/build/notiflix-notify-aio';


const debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;

const refs = {
    searchInput: document.querySelector('[id=search-box]'),
};


refs.searchInput.addEventListener('input', debounce(fetchCountries, DEBOUNCE_DELAY));




