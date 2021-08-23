
// vejamos que o controller não conterá regra de negócios

import { Request, response, Response } from "express";
import CreateProductService from "../services/CreateProductService";

class ProductController {

    // vamos criar o método para criar um produto no banco de dados
    public async create(request: Request, response: Response): Promise <Response> {
        
        // recupera os dados para inserção
        let {name, price, quantity} = request.body;
        // cria um objeto da classe CreateProductService
        let createProduct  = new CreateProductService();
        // executa a inserção
        let product = await createProduct.execute({
            name, price, quantity
        })
        
        // retorno o produto inserido
        return response.json(product);
    }
}

export default ProductController;