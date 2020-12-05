"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
class CreateTableUsers1607034965752 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
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
                    name: "company_id",
                    type: "uuid",
                    isNullable: false,
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
        }));
        await queryRunner.createForeignKey("users", new typeorm_1.TableForeignKey({
            name: "companyUser",
            referencedColumnNames: ["id"],
            referencedTableName: "companies",
            columnNames: ["company_id"],
            onDelete: "SET NULL",
            onUpdate: "CASCADE",
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropForeignKey("users", "companyUser");
        await queryRunner.dropTable("users");
    }
}
exports.default = CreateTableUsers1607034965752;
