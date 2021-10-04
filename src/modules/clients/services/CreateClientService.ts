// vamos tratar as validações e regras de negócio aqui e não no controller

import { getCustomRepository } from "typeorm";
import AppError from "../../../shared/errors/AppError";
import Client from "../typeorm/entities/Client";
import ClientRepository from "../typeorm/repositories/ClientRepository";

// vamos criar uma interface que é um tipo de produto
interface IRequest {
    name: string,
    rg: string,
    cpf: string,
    endereco: string
}

// vamos criar a classe
class CreateClientService {

    //vamos criar um método chamado execute para executar a inserção
    // recebe os dados do produto e retorna o produto inserido
    public async execute({name, rg, cpf, endereco}: IRequest): Promise<Client> {
        // obter o repositório do produto
        let clientRepository = getCustomRepository(ClientRepository)
        // vamos verificar se o produto já existe
        let clientExists = await clientRepository.findByName(name);
        if (clientExists) {
            console.log(`Cliente já existe`)
            // o statusCode será 400 pois não foi passado outro código
            throw new AppError(`Já existe um produto com este nome`);
        }
        // cria o produto para inserção
        let newClient = clientRepository.create({
            name, rg, cpf, endereco
        })
        // efetivamente insere
        await clientRepository.save(newClient);
        // retorno o novo produto
        return newClient;
    }

}

export default CreateClientService