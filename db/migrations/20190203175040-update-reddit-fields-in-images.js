/* eslint-disable */
module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn('images', 'redditPostUrl', Sequelize.STRING);
    queryInterface.addColumn('images', 'title', Sequelize.STRING);
    return queryInterface.removeColumn('images', 'redditPostId');
  },
}
