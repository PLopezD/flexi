import mongoose from 'mongoose'

let workoutSchema = mongoose.Schema({
  title: {
    type: String
  },
  url: {
    type: String,
    required: true,
    unique: true
  }
});

export default mongoose.model('Workout', workoutSchema);
