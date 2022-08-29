import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchCountries } from './fetchCountries';
import debounce from 'lodash.debounce';
import {
  countryCardTemplate,
  countryListTemplate,
} from './renderCountriesMarkup';
import { refs } from './refs';
import './css/styles.css';

const DEBOUNCE_DELAY = 300;

refs.inputSearchCountrie.addEventListener(
  'input',
  debounce(onInputCountry, DEBOUNCE_DELAY)
);

// Основная функция при вводе в инпут
function onInputCountry(e) {
  e.preventDefault();
  let countryName = e.target.value.trim();
  console.log(countryName);
  // Если не пусто вызываем Фетч
  if (countryName) {
    fetchCountries(countryName)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }

        return response.json();
      })
      .then(countries => {
        if (countries.length > 10) {
          Notify.info(
            'Too many matches found. Please enter a more specific name.'
          );
          return;
        }
        if (countries.length >= 2 && countries.length <= 10) {
          countryListTemplate(countries);
          return;
        }
        countryCardTemplate(countries);
      })
      .catch(error => {
        Notify.failure('Oops, there is no country with that name');
      });
  }
  refs.divCountryInfo.innerHTML = '';
  refs.ulCountryList.innerHTML = '';
}
