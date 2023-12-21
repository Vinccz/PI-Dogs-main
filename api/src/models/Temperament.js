const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
    // Defino el modelo
      sequelize.define('Temperament', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },{timestamps: false});
  
   
  };