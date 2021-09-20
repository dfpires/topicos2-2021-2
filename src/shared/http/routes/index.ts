// utilizar a classe Routes do express
import {Router} from 'express'

// importa rota de produto
import productRouter from '../../../modules/products/routes/routes.product'

// importa rota do usuário
import userRouter from '../../../modules/users/routes/user.routes'

// cria um objeto de rotas
let routes = Router();

routes.use('/products', productRouter)

routes.use('/users', userRouter)

// exporta o objeto
export default routes;