import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateContacts1617715649617 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'contacts',
          columns: [
            {
              name: 'id',
              type: 'varchar',
              isPrimary: true,
              isNullable: false,
              generationStrategy: 'uuid',
              default: 'uuid_generate_v4()',
            },
            {
              name: 'name',
              type: 'varchar',
              isNullable: false,
            },
            {
              name: 'email',
              type: 'varchar',
              isNullable: true
            },
            {
              name: 'phone',
              type: 'varchar',
              isNullable: true
            },
            {
              name: 'celPhone',
              type: 'varchar',
              isNullable: true
            },
            {
              name: 'zipCode',
              type: 'varchar',
              isNullable: true
            },
            {
              name: 'street',
              type: 'varchar',
              isNullable: true
            },
            {
              name: 'houseNumber',
              type: 'int',
              isNullable: true
            },
            {
              name: 'district',
              type: 'varchar',
              isNullable: true
            },
            {
              name: 'city',
              type: 'varchar',
              isNullable: true
            },
            {
              name: 'state',
              type: 'varchar',
              isNullable: true
            },
            {
              name: 'category',
              type: 'varchar',
              isNullable: true
            },
            {
              name: 'created_at',
              type: 'timestamp',
              default: 'now()'
            },
            {
              name: 'updated_at',
              type: 'timestamp',
              default: 'now()'
            },
          ]
        })
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('contacts');
    }
}
