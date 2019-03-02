/* eslint-disable */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        email: Sequelize.STRING,

        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
      });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
}
