// utilizar a classe Routes do express
import {Router} from 'express'

// importa rota de produto
import productRouter from '../../../modules/products/routes/routes.product'
// importa rota do usuário
import userRouter from '../../../modules/users/routes/user.routes'
// importa rota do usuário
import clientRouter from '../../../modules/users/routes/user.routes'
// importa rota de sessão do usuário
import sessionRouter from '../../../modules/users/routes/session.routes'

// cria um objeto de rotas
let routes = Router();

routes.use('/products', productRouter)

routes.use('/users', userRouter)

routes.use('/clients', clientRouter)

routes.use('/session', sessionRouter)

// exporta o objeto
export default routes;