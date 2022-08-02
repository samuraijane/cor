'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mentee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Mentee.belongsTo(models.Users, {
        foreignKey: "userId",
      })
    }
  }
  Mentee.init({
    userId: DataTypes.INTEGER,
    Q1: DataTypes.TEXT,
    Q2: DataTypes.TEXT,
    Q3: DataTypes.TEXT,
    Q4: DataTypes.TEXT,
    Q5: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Mentee',
  });
  return Mentee;
};