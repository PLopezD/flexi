import Workout from './workoutModel'
import _ from 'lodash'
import moment from 'moment'

let controller = {
  uploadNewWorkout: (req,res,next) => {
    let newWorkout = req.body;
    Workout.create(newWorkout)
    .then(function(workout) {
      res.json(workout);
    }, function(err) {
      res.json(err);
    });
  
  },
  getWorkouts: (req,res,next) => {
    let query = _produceQuery(req.query)
    console.log(query)
    Workout.find(query)
    .then(function(workouts) {
      console.log(workouts)
      res.json(workouts);
    }, function(err) {
      res.json(err);
    });
  
  }
}

let _produceQuery = (params) => {
  let query;
  if (params.date) {
    const day = moment(params.date);
    const today = day.startOf('day')
    const tomorrow = moment(today).add(1, 'days')
    query = { date : {
          '$gte': new Date(today.toDate()),
          '$lte': new Date(tomorrow.toDate())
          }
        }
  } else if (params.user) {
    query = {'user.email': params.user}
  } else {
    query = params
  }
  return query
}

export default controller

