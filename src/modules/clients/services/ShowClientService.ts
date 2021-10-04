import { getCustomRepository } from "typeorm"
import AppError from "../../../shared/errors/AppError"
import Product from "../typeorm/entities/Product"
import ProductRepository from "../typeorm/repositories/ProductRepository"

interface IRequest {
    id: string
}
// mostrar um únic produto
class ShowProductService {

    public async execute({id}: IRequest): Promise<Product> {

        let productRepository = getCustomRepository(ProductRepository)
        let productExist = await productRepository.findOne(id)
        if (!productExist){
            throw new AppError(`Produto não existe`) // sai do método
        }
        // produto existe
        return productExist

    }
}

export default ShowProductService