/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('user_info').del()
  await knex('user_info').insert([
    {id: 1, user_id: 1, goals_completed: 1, goals_failed: 1},
    {id: 2, user_id: 2, goals_completed: 2, goals_failed: 2},
    {id: 3, user_id: 3, goals_completed: 3, goals_failed: 3}
  ]);
};
