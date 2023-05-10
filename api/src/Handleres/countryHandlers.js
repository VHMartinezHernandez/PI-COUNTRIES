const {getCountries,getCountryByName,} = require("../controllers/getCountries");
const getCountriesId = require("../controllers/getcountriesId");

const getCountryHandler = async (req, res) => {
    const { name } = req.query;
    try {
      if (name) {
        const country = await getCountryByName(name);
        if (country) {
          res.status(200).json([country]); // Devolver el país como un array de objetos
        } else {
          res.status(404).json({ message: "País no encontrado" });
        }
      } else {
        const countries = await getCountries();
        res.status(200).json(countries);
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

const getCountryIdHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const countries = await getCountriesId(id);
    res.status(200).json(countries);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getCountryHandler,
  getCountryIdHandler,
};
