const {Router} = require("express");
const {getCountryHandler, getCountryIdHandler} = require("../Handleres/countryHandlers");

const countryrouter = Router();

countryrouter.get("/", getCountryHandler);
countryrouter.get("/:id", getCountryIdHandler);


module.exports = countryrouter;