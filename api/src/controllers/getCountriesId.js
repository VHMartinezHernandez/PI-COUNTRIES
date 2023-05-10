const {Country, Activity} = require("../db");

const getCountriesId = async (id) => {    
    const countries = await Country.findByPk(id,{
        include: Activity,
    });
    if(!countries) throw Error ("Pais no existe...")
    return countries;
}

module.exports = getCountriesId;