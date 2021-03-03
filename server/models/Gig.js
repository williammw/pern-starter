const { Sequelize } = require('sequelize')
const db = require('../config/db')


const Gig = db.define('gig', {  
  title: {
    type : Sequelize.STRING
  },
  technology: {
    type : Sequelize.STRING
  },
  budget: {
    type : Sequelize.STRING
  },
  description: {
    type : Sequelize.STRING
  },
  contact_email: {
    type : Sequelize.STRING
  },
  createdAt: {
    type : Sequelize.STRING
  },
  updatedAt: {
    type : Sequelize.STRING
  },
  
})