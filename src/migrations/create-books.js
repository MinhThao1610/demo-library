'use strict';

const { raw } = require('mysql');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('books', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            name: {
                type: Sequelize.STRING,
            },
            category: {
                type: Sequelize.INTEGER,
            },
            publisher: {
                type: Sequelize.STRING,
            },
            total_amount: {
                type: Sequelize.INTEGER,
            },
            current_number: {
                type: Sequelize.INTEGER,
            },
            total_lost: {
                type: Sequelize.INTEGER,
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
        await queryInterface.dropTable('books');
    },
};
