'use strict';

const { raw } = require('mysql');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('borrow_books', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            MSSV: {
                type: Sequelize.INTEGER,
            },
            book_id: {
                type: Sequelize.INTEGER,
            },
            borrow_date: {
                type: Sequelize.DATE,
            },
            pay_date: {
                type: Sequelize.DATE,
            },
            staff: {
                type: Sequelize.INTEGER,
            },
            note: {
                type: Sequelize.STRING,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                raw: true,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                raw: true,
            },
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('borrow_books');
    },
};
