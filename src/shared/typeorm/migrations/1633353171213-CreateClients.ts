import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateClients1633353171213 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

                // vamos criar uma tabela no banco de dados
                await queryRunner.createTable(new Table({
                    name: 'clients',
                    columns:[
                        {
                            name: 'id',
                            type: 'uuid',
                            isPrimary: true,
                            generationStrategy: 'uuid',
                            default: 'uuid_generate_v4()'
                        },
                        {
                            name: 'name',
                            type: 'varchar'
                        },
                        {
                            name: 'rg',
                            type: 'varchar'
                        },
                        {
                            name: 'cpf',
                            type: 'varchar'
                        },
                        {
                            name: 'endereco',
                            type: 'varchar'
                        },
                        {
                            name: 'created_at',
                            type: 'timestamp with time zone',
                            default: 'now()'
                        },
                        {
                            name: 'updated_at',
                            type: 'timestamp with time zone',
                            default: 'now()'
                        }
                    ]
                }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
