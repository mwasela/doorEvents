const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('blk_users', {
    blk_users_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    blk_users_fname: {
        type: DataTypes.STRING
    },
    blk_users_surname: {
        type: DataTypes.STRING
    },
    blk_users_email: {
        type: DataTypes.STRING
    },
    blk_users_password: {
        type: DataTypes.STRING
    },
    blk_users_status: {
        type: DataTypes.SMALLINT
    }
}, {
    timestamps: false
});

sequelize
  .sync({
    //force: true
  })
  .then(() => {
    console.log("Models synced with the database");
  })
  .catch((error) => {
    console.error("Error syncing models:", error);
  });


module.exports = User;
