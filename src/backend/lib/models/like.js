import Sequelize from 'sequelize';
import db from 'lib/db-connection';

const Like = db.define('like', {
  userId: Sequelize.INTEGER,
  imageId: Sequelize.INTEGER,
});

export default Like;
