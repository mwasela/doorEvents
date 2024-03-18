const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('blk_doorEvents', 'root', '12345', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;