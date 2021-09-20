
// vamos utilizar a dependência do express
import {Router} from 'express'
// importa o controller do produto
import ProductController  from '../controllers/ProductController'

// importa o celebrate
import {celebrate, Joi, Segments} from 'celebrate'

// cria um objeto de roteamento
let productRouter = Router()

// cria um objeto de controller
let productController = new ProductController()

// cria as rotas
productRouter.get('/', productController.index) // lista todos os produtos
// valida que o id é do tipo uuid 
productRouter.get('/:id', 
celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    }
}),
productController.show) //mostra um produto
//vamos tratar o erro de não ter sido passado um produto para inserir
productRouter.post('/', 
celebrate({
    [Segments.BODY]: {
        name: Joi.string().required(),
        price: Joi.number().precision(2).required(),
        quantity: Joi.number().required()
    }
}),
productController.create) // insere um produto
// valida que o id é do tipo uuid 
productRouter.delete('/:id', 
celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    }
}),
productController.delete) // remove um produto
// valida que o id é do tipo uuid e também deve conter o produto
productRouter.put('/:id', 
celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    },
    [Segments.BODY]: {
        name: Joi.string().required(),
        price: Joi.number().precision(2).required(),
        quantity: Joi.number().required()
    }
}),
productController.update) // atualiza um produto

export default productRouter


