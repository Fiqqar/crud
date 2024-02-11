const dbconfig = require('../config/db.config.js');
const sequelize = require('sequelize');
const sequelize2 = new sequelize(dbconfig.DB, dbconfig.USER, dbconfig.PASSWORD, {
    host: dbconfig.HOST,
    dialect: dbconfig.dialect,
    operatorsAliases: false,
    pool: {
        max: dbconfig.pool.max,
      min: dbconfig.pool.min,
      acquire: dbconfig.pool.acquire,
      idle: dbconfig.pool.idle
    }
});

const db = {};
db.sequelize = sequelize;
db.sequelize2 = sequelize2;
db.user = require('./user.model.js')(sequelize, sequelize2);
module.exports = db;