'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('borrow_books', [
            {
                // MSSV: '20020113',
                // book_id: '2',
                // borrow_date: '2021-11-19',
                // pay_date: '2022-03-19',
                // staff: '1',
                // note: '',
                // createdAt: new Date(),
                // updatedAt: new Date()
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
