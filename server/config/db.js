
const { Sequelize } = require('sequelize');


// Option 2: Passing parameters separately (other dialects)
 module.exports = new Sequelize('postgres', 'tododbuser', '1234567z', {
  host: 'localhost',
  dialect: 'postgres',
  // operatorsAliases: false, #v5 obsolete
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle:10000
  },
});
