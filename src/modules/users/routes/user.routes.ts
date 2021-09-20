import {Router} from 'express'
import UserController from '../controllers/UserController'

let userRouter = Router()
let userController = new UserController()

userRouter.get('/', userController.index)

userRouter.post('/', userController.create)



export default userRouter