/*
 *
 * run from root project folder
 *
 */
const Sequelize = require('sequelize');
const Umzug = require('umzug');

const scriptsDir = __dirname;
const srcDir = `${scriptsDir}/../`;
const dbDir = `${srcDir}/../db/`;

const sequelize = new Sequelize(process.env.DATABSE_URL);
const umzug = new Umzug({
  storage: 'sequelize',

  storageOptions: {
    sequelize,
  },

  migrations: {
    params: [
      sequelize.getQueryInterface(),
      Sequelize,
    ],
    path: `${dbDir}/migrations`,
  },
});

return umzug.up();
