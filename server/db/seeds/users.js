/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export default async function seed(knex) {
  // Deletes ALL existing entries
  await knex('table_name').del()
  await knex('table_name').insert([
    {id: 1, username: 'JohnDoe456', password: 'JaneDoe456'},
    {id: 2, username: 'notJaneDoe123', password: 'JohnDoe123'},
    {id: 3, username: 'Michael_Scott', password: 'TheBestManager'}
  ]);
};
