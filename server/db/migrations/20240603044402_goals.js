/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = async function(knex) {
    return knex.schema.createTable('goals', (table) => {
      table.integer('id')
      table.integer('user_id')
      table.string('title')
      table.string('content')
      table.timestamp('time_created')
      table.timestamp('time_completed')
      table.string('durationi')
      table.boolean('main_goal')
      table.boolean('completed')
      table.string('time_done')
      table.integer('progress')
    })
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  export const down = async function(knex) {
    return knex.schema.dropTable('goals')
  };
  