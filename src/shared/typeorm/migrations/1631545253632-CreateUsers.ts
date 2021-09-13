import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1631545253632 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
         // vamos criar uma tabela no banco de dados
         await queryRunner.createTable(new Table({
            name: 'users',
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
                    name: 'email',
                    type: 'varchar',
                    isUnique: true
                },
                {
                    name: 'password',
                    type: 'varchar'
                },
                {
                    name: 'avatar',
                    type: 'varchar',
                    isNullable: true
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
