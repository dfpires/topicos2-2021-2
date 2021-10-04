import { getCustomRepository } from "typeorm"
import Product from "../typeorm/entities/Product";
import ProductRepository from "../typeorm/repositories/ProductRepository"

class ListProductService{

    // retorna a lista todos os produtos no repositório
    public async execute(): Promise<Product[]>{

        let productRepository = getCustomRepository(ProductRepository)
        let products = productRepository.find(); // retorna todos os produtos
        return products;
    }
}

export default ListProductService