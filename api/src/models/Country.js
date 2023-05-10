const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Country",
    {     
      id: {
        type: DataTypes.STRING,
        allowNull: true,
        primaryKey: true,
        validate: {
          len: [3],
        },
      },
      name: {
        type: DataTypes.STRING,
        unique: true, //No se repite
        allowNull: false, //para que no permita null
      },
      flagImage: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {isUrl: true},
      },
      continents: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      capital: {
        type: DataTypes.STRING,
        
      },
      subregion: {
        type: DataTypes.STRING,
      },
      area: {
        type: DataTypes.STRING,
      },
      population: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
