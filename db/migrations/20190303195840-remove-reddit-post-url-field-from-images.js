/* eslint-disable */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('images', 'redditPostUrl');
  },
}
