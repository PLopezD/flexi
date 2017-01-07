import Workout from './workoutModel'
import _ from 'lodash'


let controller = {
  uploadWorkoutImage: (req,res,next) => {
    console.log(req.headers.body)
    res.json({'good':'one'})
  }
}

export default controller
