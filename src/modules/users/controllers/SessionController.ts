import { Request, Response } from "express";
import CreateSessionService from "../services/CreateSessionService";

export default class SessionController {

    public async create(request: Request, response: Response): Promise<Response> {
        
        // recupera usuário e senha informados pelo usuário no body da requisição
        const {email, password} = request.body
        // cria objeto da SessionService
        const createSession = new CreateSessionService()
        // obter o token
        const user = await createSession.execute({
            email, password
        })

        return response.json(user) // retorna o token
    }
}