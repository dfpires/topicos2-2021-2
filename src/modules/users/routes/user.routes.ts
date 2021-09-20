import { celebrate, Joi, Segments } from 'celebrate'
import {Router} from 'express'
import UserController from '../controllers/UserController'

let userRouter = Router()
let userController = new UserController()

userRouter.get('/', userController.index)

userRouter.post('/', 
celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string().required(),
    },
  }),
userController.create)



export default userRouter