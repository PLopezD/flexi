let router = require('express').Router();
import controller from './workoutController';

router.route('/')
  .post(controller.uploadNewWorkout)
  .get(controller.getWorkouts)


export default router