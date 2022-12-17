module.exports = {
  development: {
    client: 'mysql2',
    connection: {
      host: '127.0.0.1',
      port: 3306,
      user: 'root',
      password: 'pokemon38',
      database: 'gestao'
    },
    seeds: {
      directory: './src/database/seeds'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './src/database/migrations'
    },
    useNullAsDefault: true
  }
};