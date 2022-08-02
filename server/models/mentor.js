'use strict';
const {
  Model
} = require('sequelize');
const users = require('./users');
module.exports = (sequelize, DataTypes) => {
  class Mentor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Mentor.belongsTo(models.Users, {
        foreignKey: "userId",
      })
    }
  }
  Mentor.init({
    userId: DataTypes.INTEGER,
    Q1: DataTypes.TEXT,
    Q2: DataTypes.TEXT,
    Q3: DataTypes.TEXT,
    Q4: DataTypes.TEXT,
    Q5: DataTypes.TEXT,
    Q6: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Mentor',
  });
  return Mentor;
};