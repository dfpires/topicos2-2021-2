import { EntityRepository, Repository } from "typeorm";
import User from "../entities/User";

@EntityRepository(User)
class UserRepository extends Repository<User> {
    
    // esta classe vai herdar todos os métodos de inserir, remover, consultar e atualizar do TypeORM
    // além disso, podemos criar outros métodos
    // async -> método é assíncrono, quem o chama pode realizar atividades em paralelo, sem precisar esperar pela resposta
    // todo método que é async deve retornar uma promessa
    public async findByName(name: string): Promise<User | undefined> {
        let product = this.findOne({ // procura pelo produto com determinado nome e retorna o primeiro encontrado
            where: {
                name
            }
        })
        return product;
    }

    public async findByEmail(email: string): Promise<User | undefined> {
        let product = this.findOne({ // procura pelo produto com determinado nome e retorna o primeiro encontrado
            where: {
                email
            }
        })
        return product;
    }

    public async findById(id: string): Promise<User | undefined> {
        let product = this.findOne({ // procura pelo produto com determinado nome e retorna o primeiro encontrado
            where: {
                id
            }
        })
        return product;
    }
}

export default UserRepository;