"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
class CreateTableCompany1607034839959 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "companies",
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
                    name: "nameFantasy",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "cnpj",
                    type: "int",
                    isNullable: false,
                    isUnique: true,
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
    }
    async down(queryRunner) {
        await queryRunner.dropTable("companies");
    }
}
exports.default = CreateTableCompany1607034839959;
