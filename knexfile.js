// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export default {
  development: {
    client: "mysql2",
    connection: {
      host: "node-knex-mysql",
      port: 3306,
      user: "root",
      password: "pokemon38",
      database: "gestao",
    },
    seeds: {
      directory: "./src/database/seeds",
    },
    migrations: {
      tableName: "migrations",
      directory: "./src/database/migrations",
    },
    useNullAsDefault: true,
  },

  staging: {
    client: "mysql2",
    connection: {
      host: "node-knex-mysql",
      port: 3306,
      user: "root",
      password: "pokemon38",
      database: "gestao",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "migrations",
    },
  },

  production: {
    client: "mysql2",
    connection: {
      host: "node-knex-mysql",
      port: 3306,
      user: "root",
      password: "pokemon38",
      database: "gestao",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "migrations",
    },
  },
};
