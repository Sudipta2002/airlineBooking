'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        await queryInterface.bulkInsert('Airports', [{
                name: "NSCBI",
                cityId: 35,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "IGI",
                cityId: 34,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Behala Airport",
                cityId: 35,
                createdAt: new Date(),
                updatedAt: new Date()

            },
            {
                name: "Bhuvaneswar Airport",
                cityId: 40,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ])

    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};