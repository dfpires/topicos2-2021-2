
// vejamos que o controller não conterá regra de negócios

import { request, Request, response, Response } from "express";
import CreateProductService from "../services/CreateClientService";
import DeleteProductService from "../services/DeleteClientService";
import ListProductService from "../services/ListClientService";
import ShowProductService from "../services/ShowClientService";
import UpdateProductService from "../services/UpdateClientService";

class ClientController {

    // vamos criar o método para criar um produto no banco de dados
    public async create(request: Request, response: Response): Promise <Response> {
        
        // recupera os dados para inserção
        let {name, rg, cpf, endereco} = request.body;
        // cria um objeto da classe CreateProductService
        let createProduct  = new CreateProductService();
        // executa a inserção
        let product = await createProduct.execute({
            name, rg, cpf, endereco
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

    // vamos criar o método para listar todos os produtos no banco de dados
    public async index(request: Request, response: Response): Promise<Response> {
        let listProductService = new ListProductService()
        let products = await listProductService.execute()
        return response.json(products)
    }

    // vamos criar o método para mostrar um produto do banco de dados
    public async show(request: Request, response: Response): Promise<Response>{
        let {id} = request.params

        let showProductService = new ShowProductService()

        let product = await showProductService.execute({id})

        return response.json(product)
    }

    // vamos criar o método para atualizar um produto no banco de dados
    public async update(request: Request, response: Response): Promise<Response>{

        // recuperar id
        let {id} = request.params
        let {name, quantity, price} = request.body

        let updateProductService = new UpdateProductService()
        let product = await updateProductService.execute({id, name, quantity, price})
        return response.json(product)
    }

}

  

export default ClientController;