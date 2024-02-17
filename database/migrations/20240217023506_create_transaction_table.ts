import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('transaction', table => {
    table.increments('id').primary();
    table.bigInteger('value').notNullable();
    table.string('type').notNullable();
    table.string('description').notNullable();
  })
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('transaction');
}

