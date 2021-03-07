const { Sequelize } = require('sequelize')
const db = require('../config/db')


const User = db.define('user', {
  user_name: {
    type: Sequelize.STRING
  },
  display_name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  isActivated: {
    type: Sequelize.STRING
  }

});

User.sync().then(() => {
  console.log('table User created');
});
module.exports = User;