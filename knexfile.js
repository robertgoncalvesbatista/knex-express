module.exports = {
  development: {
    client: "mysql",
    connection: {
      host: process.env.DATABASE_HOST,
      port: process.env.DATABASE_PORT,
      user: "root",
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
    },
    seeds: {
      directory: "./src/database/seeds",
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./src/database/migrations",
    },
    useNullAsDefault: true,
  },
};
