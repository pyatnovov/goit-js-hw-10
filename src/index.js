import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Notiflix from 'notiflix';


const debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;
const countryData = document.querySelector('.country-info');
const countryList = document.querySelector('.country-list');
const searchInput = document.querySelector('[id=search-box]');

let countryInputName = '';

searchInput.addEventListener('input', debounce(onInputChange, DEBOUNCE_DELAY));


function onInputChange() {
    countryInputName = searchInput.value.trim();
    if (countryInputName === '') {
        clear();
        return;
    }

    fetchCountries(countryInputName).then(country => {
        if (country.length < 2) {
            renderCountryCard(country);
        } else if (country.length < 10 && country.length > 1) {
            renderCountryList(country);
        } else {
            clear();
            Notify.info(
              'Too many matches found. Please enter a more specific name'
            );
        }
       
    }).catch(error => {
        clear();
        Notify.failure(
          'Oops, there is no country with that name'
        ); 
    })

}
function renderCountryCard(countryNames) {
    clear();
    const c = countryNames[0];
    const markup = `<div class="card">
        <div class="main-info-wraper">
        <img src ="${c.flags.svg}" alt="Flag" width=50 height=40>
        <h1 class="country-name">${c.name.official}</h1>
        </div>
        <ul class="additional-info-list list">
        <li class="info-item">Capital:${c.capital}</li>
        <li class="info-item">Population:${c.population}</li>
        <li class="info-item">Languages:${Object.values(c.languages)}</li>
        </ul>
    </div>`;
    countryData.innerHTML = markup;
}

function renderCountryList(countryNames) {
    clear();
    const cardsList = countryNames.map((c) => {
        return `<li class="country-list-item item">
        <img src="${c.flags.svg}" alt="flag" width=30 height=30>
        <p class ="country-list-name">${c.name.official}</p>
        </li>`;
    }).join('');

    countryList.insertAdjacentHTML("beforeend", cardsList);
}

function clear() {
    countryData.innerHTML = "";
    countryList.innerHTML = "";
}


