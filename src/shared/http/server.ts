import 'reflect-metadata'
// vamos criar um servidor web com dependência do express
import express, { NextFunction, Request, Response } from 'express'
// permite dar permissão para as APIs
import cors from 'cors'
//criando o servidor
let servidor = express()
// servidor usando o cors
servidor.use(cors())
// servidor precisa converter em JSON o conteúdo vindo do frontend
servidor.use(express.json())


// importa as rotas
import routes from './routes'
import { RequestListener } from 'http'
import AppError from '../errors/AppError'
// utilizando 
servidor.use(routes)

servidor.use(
    (error: Error, request: Request, response: Response, next: NextFunction ) => {
        if (error instanceof AppError){
            return response.status(error.statusCode).json({
                status: 'error',
                message: error.message
            })
        }
        // caso não seja um erro nosso -> criar, consultar, remover e lista produtos
        return response.status(500).json({
            status: 'error',
            message: 'Internet error server'
        })
    }
)
// servidor será executado e aguardando pelas requisições
servidor.listen(3333, () => {
    console.log(`Servidor está up and running`)
})
