var router = require('express').Router();
require('dotenv').config()

router.use('/users', require('./user/userRoutes'));
router.use('/workouts', require('./workouts/workoutRoutes'));


// route for aws access key, can be reset if i need to 
router.route('/config')
  .get((req, res, next) => {
    res.json({
      accessKey: process.env.AWS_ACCESS_KEY, 
      secretKey: process.env.AWS_SECRET_KEY,
      region: "us-east-1",
      bucket: "flextester123",
      successActionStatus: 201
    })
  })

module.exports = router;

