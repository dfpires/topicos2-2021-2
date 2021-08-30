
// vamos utilizar a dependência do express
import {Router} from 'express'
// importa o controller do produto
import ProductController  from '../controllers/ProductController'

// cria um objeto de roteamento
let productRouter = Router()

// cria um objeto de controller
let productController = new ProductController()

// cria as rotas
productRouter.get('/', productController.index) // lista todos os produtos
productRouter.get('/:id', productController.show) //mostra um produto
productRouter.post('/', productController.create) // insere um produto
productRouter.delete('/:id', productController.delete) // remove um produto
productRouter.put('/:id', productController.update) // atualiza um produto

export default productRouter


