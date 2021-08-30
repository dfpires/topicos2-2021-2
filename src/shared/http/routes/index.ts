// utilizar a classe Routes do express
import {Router} from 'express'

// importa rota de produto
import productRouter from '../../../modules/products/routes/routes.product'

// cria um objeto de rotas
let routes = Router();

routes.use('/products', productRouter)

// exporta o objeto
export default routes;