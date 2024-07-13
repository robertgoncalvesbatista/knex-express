import knex from "knex";

import knexFile from "../../knexfile.js";

class Database {
  constructor() {
    this.environment = process.env.NODE_ENV || "development";

    return knex(knexFile[this.environment]);
  }
}

export default Database;
