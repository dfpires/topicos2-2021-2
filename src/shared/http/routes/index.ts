// utilizar a classe Routes do express
import {Router} from 'express'

// cria um objeto de rotas
let routes = Router();

// criando uma rota GET raiz /
routes.get('/', (request, response ) => {
    // o que será retornado para o usuário em formato JSON
    return response.json({
        message: 'It is working'
    })
})

// exporta o objeto
export default routes;