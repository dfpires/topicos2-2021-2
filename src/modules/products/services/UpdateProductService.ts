import { getCustomRepository } from "typeorm"
import AppError from "../../../shared/errors/AppError"
import Product from "../typeorm/entities/Product"
import ProductRepository from "../typeorm/repositories/ProductRepository"

interface IRequest {
    id: string,
    name: string,
    price: number,
    quantity: number
}

class UpdateProductService {

    public async execute({id, name, price, quantity}: IRequest): Promise<Product>{

        let productRepository = getCustomRepository(ProductRepository)
        // verifica se existe para atualizar
        let product = await productRepository.findOne(id) // busca ou procura pelo primeiro produto
        if (!product){
            throw new AppError(`Produto não existe`)
        }
        // product exist
        // verifica se vai atualizar com um nome que já existe
        let productExists = await productRepository.findByName(name) // busca ou procura por um produto com aquele nome
        if (productExists){
            throw new AppError(`Já existe um produto com este nome`)
        }
        // agora sim podemos atualizar
        product.name = name;
        product.price = price;
        product.quantity = quantity;
      
        // atualiza
        await productRepository.save(product) // como product tem id, automaticamente atualiza

        return product
    }
}

export default UpdateProductService