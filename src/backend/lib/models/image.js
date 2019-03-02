import Sequelize from 'sequelize';
import db from 'lib/db-connection';

const Image = db.define('image', {
  redditPostId: Sequelize.STRING,
  url: Sequelize.STRING,
});

export default Image;
