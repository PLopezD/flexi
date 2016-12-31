import User from './userModel'
import _ from 'lodash'


let controller = {
  newUser: (req,res,next) => {
    let lol = {posts: 'fuck'}
    res.json(lol);
  }
}

export default controller