import { Request, Response } from "express";
import { EntityListenerMetadata } from "typeorm/metadata/EntityListenerMetadata";
import CreateUserService from "../services/CreateUserService";
import ListUserService from "../services/ListUserService";


export default class UserController {

    public async index(request: Request, response: Response): Promise<Response> {
        let listUserService = new ListUserService()
        let users = await listUserService.execute()
        return response.json(users)
    }

    public async create(request: Request, response: Response): Promise<Response> {
        let {name, email, password } = request.body
        let createUserService = new CreateUserService()
        let user = await createUserService.execute({
            name, 
            email, 
            password
        })
        return response.json(user)
    }

}