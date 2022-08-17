'use strict';

const { sequelize } = require("../models");

module.exports = {
  async up (queryInterface, Sequelize) {
    // await queryInterface.addColumn("Users", {
    //   deletedAt: {
    //     allowNull: true,
    //     type: Sequelize.DATE,
    //   },
    // });
    await sequelize.define('users', {
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    }, {
      paranoid: true
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
