import { refs } from './refs';

export function countryCardTemplate([country]) {
  const {
    flags: { svg },
    name: { official },
    capital,
    population,
    currencies,
    languages,
  } = country;
  const oneContry = `
        <img class="country-info__flags" src="${svg}" alt="${official}" width="50" />
        <h2 class="country-info__name">${official}</h2>
      <p class="country-info__capital"><span class="country-info__weight">Capital:</span> ${capital}</p>
      <p class="country-info__population"><span class="country-info__weight">Population:</span> ${population}</p>
      <p class="country-info__currency"><span class="country-info__weight">Currency:</span> ${Object.keys(
        currencies
      )}</p>
      <p class="country-info__languages"><span class="country-info__weight">Languages:</span> ${Object.values(
        languages
      ).join(', ')}</p>
  `;
  refs.divCountryInfo.innerHTML = oneContry;
}

export function countryListTemplate(countries) {
  const markup = countries.map(({ flags: { svg }, name: { official } }) => {
    return `<li class="country-list__item">
    <img class="country-list__flags" src="${svg}" alt="${official}" width="25" />
    <h2 class="country-list__name">${official}</h2>
  </li>
  `;
  });
  refs.ulCountryList.innerHTML = markup.join('');
}
