var router = require('express').Router();
require('dotenv').config()

router.use('/users', require('./user/userRoutes'));
router.use('/workouts', require('./workout/workoutRoutes'));

// route for aws access key, can be reset if i need to 

router.route('/config').get((req, res) => {
  res.json({
    accessKey: process.env.AWS_ACCESS_KEY, 
    secretKey: process.env.AWS_SECRET_KEY,
    region: "us-east-2",
    bucket: "flexi-prod",
    successActionStatus: 201,
    startDate:"2017-01-01"
  })
})

module.exports = router;

