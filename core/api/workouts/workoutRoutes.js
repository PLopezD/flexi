let router = require('express').Router();
import controller from './workoutController';

router.route('/')
  .post(controller.uploadWorkoutImage)


export default router