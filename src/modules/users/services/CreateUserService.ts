// vamos tratar as validações e regras de negócio aqui e não no controller

import { getCustomRepository } from "typeorm";
import AppError from "../../../shared/errors/AppError";
import User from "../typeorm/entities/User";
import UserRepository from "../typeorm/repositories/UserRepository";

// vamos criar uma interface que é um tipo de produto
interface IRequest {
    name: string,
    email: string,
    password:string
}

// vamos criar a classe
class CreateUserService {

    //vamos criar um método chamado execute para executar a inserção
    // recebe os dados do produto e retorna o produto inserido
    public async execute({name, email, password}: IRequest): Promise<User> {
        // obter o repositório do produto
        let userRepository = getCustomRepository(UserRepository)
        // vamos verificar se o produto já existe
        let userExists = await userRepository.findByEmail(email);
        if (userExists) {
            console.log(`Usuário já existe`)
            // o statusCode será 400 pois não foi passado outro código
            throw new AppError(`Já existe um usuário com este e-mail`);
        }
        // cria o produto para inserção
        let newUser = userRepository.create({
            name, email, password
        })
        // efetivamente insere
        await userRepository.save(newUser);
        // retorno o novo produto
        return newUser;
    }

}

export default CreateUserService