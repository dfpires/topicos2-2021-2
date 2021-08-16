// vamos criar um servidor web com dependência do express
import express from 'express'
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
// utilizando 
servidor.use(routes)
// servidor será executado e aguardando pelas requisições
servidor.listen(3333, () => {
    console.log(`Servidor está up and running`)
})
