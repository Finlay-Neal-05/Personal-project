/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = async function(knex) {
    return knex.schema.createTable('user_info', (table) => {
        table.integer('id')
        table.integer('user_id')
        table.integer('goals_completed')
        table.integer('goals_failed')
    })
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  export const down = async function(knex) {
    return knex.schema.dropTable('user_info')
  };