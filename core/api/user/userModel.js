import mongoose from 'mongoose'

let userSchema = mongoose.Schema({
  fbId: {
    type: String,
    required: true,
    unique: true
  },
  deviceId: {
    type: String,
    required: true,
    unique: true
  },
  token: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    unique: true
  },
  name: {
    type: String,
    required: true,
    unique: true
  },
  picture: {
    type: String,
    unique: true
  }
});

export default mongoose.model('User', userSchema);
