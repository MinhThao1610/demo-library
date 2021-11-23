'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class borrow_books extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    borrow_books.init(
        {
            MSSV: DataTypes.INTEGER,
            book_id: DataTypes.INTEGER,
            borrow_date: DataTypes.DATE,
            pay_date: DataTypes.DATE,
            staff: DataTypes.INTEGER,
            note: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'borrow_books',
        },
    );
    return borrow_books;
};
