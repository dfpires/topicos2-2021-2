import { getCustomRepository } from "typeorm";
import AppError from "../../../shared/errors/AppError";
import User from "../typeorm/entities/User";
import UserRepository from "../typeorm/repositories/UserRepository";
import {compare} from 'bcryptjs'

// interface de entrada de dados
interface IRequest{
    email: string,
    password: string
}

// interface de retorno de dados
interface IResponse {
    user: User,
    token: string
}
class CreateSessionService {

    public async execute({email, password}: IRequest): Promise<IResponse> {

        const userRepository = getCustomRepository(UserRepository)
        const user = await userRepository.findByEmail(email)
        // verifica se usuário existe
        if (!user){
            throw new AppError(' Email/Senha inválida', 401)
        }
        // verifica se a senha confere
        const senhaConfirmada = await compare(password, user.password)

        if (!senhaConfirmada){
            throw new AppError(' Email/Senha inválida', 401)
        }

        // está tudo correto, então vamos entregar o toke

        
    }
}