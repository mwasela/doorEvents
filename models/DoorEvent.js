const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const DoorEvent = sequelize.define('blk_doors_events', {
    blk_event_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    blk_event_user_id: {
        type: DataTypes.STRING
    },
    blk_event_door_state: {
        type: DataTypes.STRING
    },
    blk_event_door_id: {
        type: DataTypes.STRING
    },
    blk_event_timestamp: {
        type: DataTypes.STRING
    },
 
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


module.exports = DoorEvent;
