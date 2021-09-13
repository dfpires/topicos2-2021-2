import { EntityRepository, Repository } from "typeorm";
import Product from "../entities/Product";

@EntityRepository(Product)
class ProductRepository extends Repository<Product> {
    
    // esta classe vai herdar todos os métodos de inserir, remover, consultar e atualizar do TypeORM
    // além disso, podemos criar outros métodos
    // async -> método é assíncrono, quem o chama pode realizar atividades em paralelo, sem precisar esperar pela resposta
    // todo método que é async deve retornar uma promessa
    public async findByName(name: string): Promise<Product | undefined> {
        let product = this.findOne({ // procura pelo produto com determinado nome e retorna o primeiro encontrado
            where: {
                name
            }
        })
        return product;
    }
}

export default ProductRepository;