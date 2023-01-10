import './css/styles.css';
import { fetchCountries } from './fetchCountries';
    

const refs = {
    searchInput: document.querySelector('[id=search-box]'),
};

const DEBOUNCE_DELAY = 300;

console.log(refs.searchInput);
fetchCountries();

