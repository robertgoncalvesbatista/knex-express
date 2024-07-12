/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("clientes").del();
  await knex("clientes").insert([
    { id: 1, name: "robert", email: "robert@gmail.com", password: "12345678" },
    { id: 2, name: "joao", email: "joao@gmail.com", password: "12345678" },
    { id: 3, name: "maria", email: "maria@gmail.com", password: "12345678" },
  ]);
};
