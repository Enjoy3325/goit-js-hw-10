export function fetchCountries(name) {
  // const URL = 'https://restcountries.com/v3.1/name/';
  // const FILTER = '?fields=name,capital,population,flags,languages';

  // return fetch(`${URL}${name}${FILTER}`);
  return fetch(
    `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages,currencies
`
  );
}
