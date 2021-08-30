// cria a regra de negócio para remover um produto
// isso deve ser feito aqui  no service e não no controller

import { getCustomRepository } from "typeorm";
import AppError from "../../../shared/errors/AppError";
import ProductRepository from "../typeorm/repositories/ProductRepository";

// vamos criar uma interface - tipo de dado
interface IRequest {
    id: string
}
class DeleteProductService {

    // vamos fazer o método assíncrono execute
    public async execute({id}: IRequest): Promise<void> {
        // recupera o repositório do produto
        let productRepository = getCustomRepository(ProductRepository)
        // procura pelo produto que será removido
        // await aguarda pela resposta
        let productExist = await productRepository.findOne(id)
        // ! - negação / negar
        if (!productExist) { // produto não existe
            throw new AppError(`Produto não existe`) // lança o erro - sai do método
        }
        // o produto existe, vamos remover
        await productRepository.remove(productExist)
    }
}

export default DeleteProductService