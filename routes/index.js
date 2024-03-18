var express = require('express');
var router = express.Router();
var authenticateToken = require('../middlewares/auth');
var  DoorEvent  = require('../models/DoorEvent');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/doorEvents', authenticateToken, async (req, res) => {
  const user_id = req.body_user_id;
  const door_state = req.body.door_state;
  const timestamp = req.body.time; // Assuming time is the key for timestamp
  const door_id = req.body.door_id;

  try {
    const doorEvent = await DoorEvent.create({
      user_id: user_id,
      door_state: door_state,
      timestamp: timestamp,
      door_id: door_id
    });

    res.status(201).json({ message: 'User created successfully', doorEvent: doorEvent });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

);

//

module.exports = router;
