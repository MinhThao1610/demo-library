'use strict';

const { raw } = require('mysql');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('faculty', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            name: {
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
        await queryInterface.dropTable('faculty');
    },
};
