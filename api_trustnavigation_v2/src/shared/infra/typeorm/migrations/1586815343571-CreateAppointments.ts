import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { number } from '@hapi/joi';

export default class CreateAppointments1586815343571
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'appointments',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'category',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'description',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'provider',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'latitude',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'longitude',
            type: 'varchar',
            isNullable: false,
          },

          {
            name: 'date',
            type: 'timestamp with time zone',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('appointments');
  }
}
