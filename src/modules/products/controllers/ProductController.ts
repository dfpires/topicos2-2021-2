
// vejamos que o controller não conterá regra de negócios

import { request, Request, response, Response } from "express";
import CreateProductService from "../services/CreateProductService";
import DeleteProductService from "../services/DeleteProductService";

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

    // vamos criar o método para remover um produto no banco de dados
    public async delete(request: Request, response: Response): Promise <Response> {
        // o id do produto para remoção virá na URL
        let {id} = request.params
        // cria o objeto de service
        let deleteProductService = new DeleteProductService()
        
        await deleteProductService.execute({id})

        return response.json([]);
    }  

}

  

export default ProductController;