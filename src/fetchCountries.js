export {fetchCountries};
    
function fetchCountries(name) {
    fetch(
      'https://restcountries.com/v3.1/name/peru?fields=name.official,capital,population,languages,flags.svg'
    )
      .then(response => {
        return response.json();
      })
      .then(country => {
        console.log(country);
      });
}


