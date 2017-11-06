import mongoose from 'mongoose'

let workoutSchema = mongoose.Schema({
  picUrl: {
    type: String,
    required: true,
    unique: true
  },
  user: {
    type: Object,
    required: true
  },
  date: { type: Date, default: Date.now }
});

export default mongoose.model('Workout', workoutSchema);
