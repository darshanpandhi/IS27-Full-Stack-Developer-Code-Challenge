const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "testPassword",
  host: "localhost",
  port: 5432,
  database: "homeless_data",
});

module.exports = pool;
