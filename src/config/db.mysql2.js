const mysql2 = require('knex')({
    client: 'mysql2',
    connection: {
        host: '127.0.0.1',
        port: 3306,
        user: 'root',
        password: 'pokemon38',
        database: 'gestao'
    }
});

module.exports = mysql2;