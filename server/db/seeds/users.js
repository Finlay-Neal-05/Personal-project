/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {id: 1, username: 'JohnDoe456', password: 'JaneDoe456'},
    {id: 2, username: 'notJaneDoe123', password: 'JohnDoe123'},
    {id: 3, username: 'Michael_Scott', password: 'TheBestManager'}
  ]);
};
