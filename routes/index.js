var express = require('express');
var router = express.Router();
var authenticateToken = require('../middlewares/auth');
var  DoorEvent  = require('../models/DoorEvent');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/doorEvents', authenticateToken, async (req, res) => {

  console.log(req.body);
  const blk_doorEvent_user_id = req.body.user_id;
  const blk_doorEvent_door_state = req.body.door_state;
  const blk_doorEvent_timestamp = req.body.timestamp; // Assuming time is the key for timestamp
  //const blk_doorEvent_door_id = req.body.door_id;
  const blk_doorEvent_direction = req.body.direction;
  const blk_dooorEvent_deviceid = req.body.device_id;
  const blk_dooorEvent_doorlocation = req.body.doorlocation;
  try {
    const doorEvent = await DoorEvent.create({
      blk_event_user_id: blk_doorEvent_user_id,
      blk_event_door_state: blk_doorEvent_door_state,
      blk_event_timestamp: blk_doorEvent_timestamp,
      blk_event_direction: blk_doorEvent_direction,
      blk_event_device_id: blk_dooorEvent_deviceid,
      blk_event_doorlocation: blk_dooorEvent_doorlocation,
    });

    res.status(201).json({ message: 'Event created successfully', doorEvent });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

);

//

router.get("/doorEvents", async (req, res) => {
    try {
        const doorEvents = await DoorEvent.findAll({
            order: [['blk_event_timestamp', 'DESC']], // Order by blk_event_timestamp
            limit: 100
        });

        return res.status(200).json(doorEvents);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});



module.exports = router;
