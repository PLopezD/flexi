let router = require('express').Router();
import controller from './userController';

router.route('/')
  .post(controller.newUser)


export default router