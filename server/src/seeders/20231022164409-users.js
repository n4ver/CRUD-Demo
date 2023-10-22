'use strict';
const { v4: uuidv4 } = require('uuid')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('Users', [{
      id: uuidv4(),
      username: 'SBN_OC',
      password: '$2y$08$rpKRsf/f0v/tPYsuPVS1SucwXIXUKnfAOb7F.1mnTrW6h27872Xua', // base north
      is_admin: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: uuidv4(),
      username: 'Chao_Recruit',
      password: '$2y$08$tGqXUTl6181fubQk7DQgMeA.7zy7EyzFPxBoJ8tlSuvpjL8JMfvti', // kengmando
      is_admin: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Users', null, {});
  }
};
