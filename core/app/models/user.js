let mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    facebook         : {
        id           : String,
        token        : String,
        email        : String,
        name         : String,
        picture      : String
    },
    local: {
        email: String
    },
    workouts : {
        photoUrl     : String,
        createdAt    : Date
    }
});

export default mongoose.model('User', userSchema);
