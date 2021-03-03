const Pool = require("pg").Pool

const pool = new Pool({
  user: "tododbuser",
  password: "1234567z",
  host: "localhost",
  post: 5432,
  database: "perntodo"
})


module.exports = pool;