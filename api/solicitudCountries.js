const axios = require("axios");
const { Country } = require("./src/db");

const countriesApi = async () => {
  const api = await axios.get("https://restcountries.com/v3/all");
  const countriesFilter = api.data.map((element) => {
    const bandera = element.flags.filter((flag) => {
      return flag.includes("png");
    });  

    const newBandera = bandera.join();
    return {
      id: element.cca3,
      name: element.name.common,
      flagImage: newBandera,
      continents: element.continents[0],
      capital: element.capital ? element.capital[0] : 'Not found',
      subregion: element.subregion,
      area: element.area,
      population: element.population,
    };
  });

await Country.bulkCreate(countriesFilter);

};

module.exports = countriesApi;
