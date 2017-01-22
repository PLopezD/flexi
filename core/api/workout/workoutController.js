import Workout from './workoutModel'
import _ from 'lodash'

let controller = {
  uploadNewWorkout: (req,res,next) => {
    let newWorkout = req.body;
    Workout.create(newWorkout)
    .then(function(user) {
      res.json(user);
    }, function(err) {
      res.json(err);
    });
  
  }
}

export default controller

