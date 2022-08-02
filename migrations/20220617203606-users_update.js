'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Mentors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'

        }
      },
      Q1: {
        type: Sequelize.TEXT
      },
      Q2: {
        type: Sequelize.TEXT
      },
      Q3: {
        type: Sequelize.TEXT
      },
      Q4: {
        type: Sequelize.TEXT
      },
      Q5: {
        type: Sequelize.TEXT
      },
      Q6: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    await queryInterface.createTable('Mentees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'

        }

      },
      Q1: {
        type: Sequelize.TEXT
      },
      Q2: {
        type: Sequelize.TEXT
      },
      Q3: {
        type: Sequelize.TEXT
      },
      Q4: {
        type: Sequelize.TEXT
      },
      Q5: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
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
