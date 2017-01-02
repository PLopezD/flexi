import User from './userModel'
import _ from 'lodash'


let controller = {
  newUser: (req,res,next) => {
    let newUser = req.body;
    User.create(newUser)
    .then(function(user) {
      res.json(user);
    }, function(err) {
      console.log(err);
      res.json(err);
    });
  }
}

export default controller
