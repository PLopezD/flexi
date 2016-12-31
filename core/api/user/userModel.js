import mongoose from 'mongoose'

let userSchema = mongoose.Schema({
    fbId: String,
    deviceId: String,
    token: String,
    email: String,
    name: String,
    picture: String
});

export default mongoose.model('User', userSchema);
