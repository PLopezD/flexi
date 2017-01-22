let router = require('express').Router();
import controller from './workoutController';

router.route('/')
  .post(controller.uploadNewWorkout)


export default router