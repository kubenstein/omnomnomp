import Sequelize from 'sequelize';
import db from 'lib/db-connection';

const User = db.define('user', {
  email: Sequelize.STRING,
});

export default User;
