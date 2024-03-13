const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('blk_starter', 'root', '12345', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;