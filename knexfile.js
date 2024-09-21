// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export default {
  // Development
  development: {
    client: "mysql2",
    useNullAsDefault: true,
    connection: {
      host: "172.19.0.3",
      port: 3306,
      user: "root",
      password: "password",
      database: "knex-express",
    },
    seeds: {
      directory: "./src/infraestructure/database/seeds",
    },
    migrations: {
      directory: "./src/infraestructure/database/migrations",
    },
  },

  // Staging
  staging: {
    client: "mysql2",
    useNullAsDefault: true,
    connection: {
      host: "172.19.0.3",
      port: 3306,
      user: "root",
      password: "password",
      database: "knex-express",
    },
    seeds: {
      directory: "./src/infraestructure/database/seeds",
    },
    migrations: {
      directory: "./src/infraestructure/database/migrations",
    },
  },

  // Production
  production: {
    client: "mysql2",
    useNullAsDefault: true,
    connection: {
      host: "172.19.0.3",
      port: 3306,
      user: "root",
      password: "password",
      database: "knex-express",
    },
    seeds: {
      directory: "./src/infraestructure/database/seeds",
    },
    migrations: {
      directory: "./src/infraestructure/database/migrations",
    },
  },

  // Testing
  test: {
    client: "mysql2",
    useNullAsDefault: true,
    connection: {
      host: "172.19.0.3",
      port: 3306,
      user: "root",
      password: "password",
      database: "testing",
    },
    seeds: {
      directory: "./src/infraestructure/database/seeds",
    },
    migrations: {
      directory: "./src/infraestructure/database/migrations",
    },
  },
};
