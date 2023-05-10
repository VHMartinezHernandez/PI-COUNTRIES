const {Country, Activity} = require("../db");
const { Op } = require("sequelize");

const getCountries = async (query) => {
    const countries = await Country.findAll({
        where: query,    
        include: Activity,    
    })    
    return countries; 
}

const getCountryByName = async (name) => {
    const country = await Country.findOne({
      where: {
        name: {
          [Op.iLike]: name, // Buscar independientemente de mayúsculas o minúsculas
        },
      },
    });
    return country;
  };

  module.exports = { getCountries, getCountryByName };