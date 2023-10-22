'use strict';

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
    const authors = await queryInterface.sequelize.query(
      `SELECT id from Users;`
    )

    return queryInterface.bulkInsert('Complaints', [{
      id: 0,
      author: authors[0].id,
      title: 'Recruits damn lacking',
      category: ['Personnel'],
      status: ['Pending'],
      text: 'An example of a complaint',
      createdAt: new Date(),
      updatedAt: new Date()
     }]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Complaints', null, {});
  }
};
