'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class books extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  books.init({
    name: DataTypes.STRING,
    category: DataTypes.INTEGER,
    publisher: DataTypes.STRING,
    total_amount: DataTypes.INTEGER,
    current_number: DataTypes.INTEGER,
    total_lost: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'books',
  });
  return books;
};