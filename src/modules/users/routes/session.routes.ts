import { celebrate, Segments } from "celebrate";
import { Router } from "express";
import Joi from "joi";
import SessionController from "../controllers/SessionController";

// cria um objeto de rotas
const sessionRouter = Router()
// cria um objeto de controller
const sessionController = new SessionController()

// a rota / via post chama o método create
sessionRouter.post('/', 
celebrate({
    [Segments.BODY]: {
        email: Joi.string().email().required(),
        password: Joi.string().required()
    }
}),
sessionController.create)

export default sessionRouter