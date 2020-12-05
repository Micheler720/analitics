import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export default class CreateTableUsers1607034965752
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },
          {
            name: "name",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "email",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "password",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
    await queryRunner.createTable( new Table({
      name: 'users_companies_companies',
      columns: [
        {
          name: 'id',
          type: 'uuid',
          generationStrategy: 'uuid',
          isPrimary: true,
          default: 'uuid_generate_v4()'
        },
        {
          name: 'usersId',
          type: 'uuid',
          isNullable: false,
        },
        {
          name: 'companiesId',
          type: 'uuid',
          isNullable: false,
        },
        {
          name: "created_at",
          type: "timestamp",
          default: "now()",
        },
        {
          name: "updated_at",
          type: "timestamp",
          default: "now()",
        },
      ]
    }))

    await queryRunner.createForeignKey(
      "users_companies_companies",
      new TableForeignKey({
        name: "userId",
        referencedColumnNames: ["id"],
        referencedTableName: "users",
        columnNames: ["usersId"],
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      })
    );
    await queryRunner.createForeignKey(
      "users_companies_companies",
      new TableForeignKey({
        name: "companyId",
        referencedColumnNames: ["id"],
        referencedTableName: "companies",
        columnNames: ["companiesId"],
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("users_companies_companies", "companyId");
    await queryRunner.dropForeignKey("users_companies_companies", "userId");
    await queryRunner.dropTable("users_companies_companies");
    await queryRunner.dropTable("users");
  }
}
