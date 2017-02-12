let router = require('express').Router();
import controller from './userController';

router.route('/')
  .post(controller.newUser)
  .get(controller.getUsers)


export default router