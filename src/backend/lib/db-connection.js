import Sequelize from 'sequelize';

const db = new Sequelize(process.env.DATABSE_URL);

export default db;
