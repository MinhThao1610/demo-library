'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        // return queryInterface.bulkInsert('books', [{
        //   name: 'Xác suất thống kê',
        //   category: '1',
        //   publisher: '1',
        //   total_amount: '50',
        //   current_number: '50',
        //   total_lost: '0',
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // }]);
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
