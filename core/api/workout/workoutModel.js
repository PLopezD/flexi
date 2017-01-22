import mongoose from 'mongoose'

let workoutSchema = mongoose.Schema({
  user:{
    type: Object,
    required: true
  },
  picUrl: {
    type: String,
    required: true,
    unique: true
  }
});

export default mongoose.model('Workout', workoutSchema);
