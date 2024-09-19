// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export default {
  // Development
  development: {
    client: "mysql2",
    connection: {
      host: "node-knex-mysql",
      port: 3306,
      user: "root",
      password: "123456",
      database: "gestao",
    },
    seeds: {
      directory: "./src/infraestructure/database/seeds",
    },
    migrations: {
      tableName: "migrations",
      directory: "./src/infraestructure/database/migrations",
    },
    useNullAsDefault: true,
  },

  // Staging
  staging: {
    client: "mysql2",
    connection: {
      host: "node-knex-mysql",
      port: 3306,
      user: "root",
      password: "123456",
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

  // Production
  production: {
    client: "mysql2",
    connection: {
      host: "node-knex-mysql",
      port: 3306,
      user: "root",
      password: "123456",
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

  // Testing
  test: {
    client: "mysql2",
    connection: {
      host: "node-knex-mysql",
      port: 3306,
      user: "root",
      password: "123456",
      database: "testing",
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
