/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('goals').del()
  await knex('goals').insert([
    {id: 1, user_id: 1, title: 'read more', content: 'I want to read more because I enjoy it', time_created: '2024-06-04', time_completed: "2024-06-03", duration: '3', main_goal: true, completed: true, time_done: '3', progress: 100},
    {id: 2, user_id: 2, title: 'read more', content: 'I want to read more because I enjoy it', time_created: '2024-06-04', time_completed: "2024-06-03", duration: '3', main_goal: true, completed: true, time_done: '3', progress: 100},
    {id: 3, user_id: 3, title: 'read more', content: 'I want to read more because I enjoy it', time_created: '2024-06-04', time_completed: "2024-06-03", duration: '3', main_goal: true, completed: true, time_done: '3', progress: 100}
  ]);
};
