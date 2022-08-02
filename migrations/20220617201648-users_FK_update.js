'use strict';


module.exports = {
      async up(queryInterface, Sequelize) {
        await queryInterface.dropTable('Mentors');
        await queryInterface.dropTable('Mentees');
      },
      async down(queryInterface, Sequelize) {
       
      }
    };
  

   
  