import Sequelize from 'sequelize';
import db from 'lib/db-connection';

const Image = db.define('image', {
  redditPostUrl: Sequelize.STRING,
  title: Sequelize.STRING,
  url: Sequelize.STRING,
});

export default Image;
