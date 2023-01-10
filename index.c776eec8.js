const e={searchInput:document.querySelector("[id=search-box]")};console.log(e.searchInput),fetch("https://restcountries.com/v3.1/name/peru?fields=name.official,capital,population,languages,flags.svg").then((e=>e.json())).then((e=>{console.log(e)}));
//# sourceMappingURL=index.c776eec8.js.map
