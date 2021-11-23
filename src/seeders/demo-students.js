'use strict';

const { DATE } = require('sequelize');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('students', [
            {
                // MSSV:'20020113',
                // firstName: 'Nguyễn Văn',
                // lastName: 'B',
                // class: '2',
                // faculty: '1',
                // address: 'Xuân Thủy, Cầu Giấy, Hà Nội',
                // phoneNumber: '0973641212',
                // create_date: '2020-09-01',
                // expire_date: '2024-09-01',
                // createdAt: new Date(),
                // updatedAt: new Date(),
            },
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    },
};
