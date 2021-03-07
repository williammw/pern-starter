const express = require('express');
const router = express.Router();
const db = require('../config/db');
const User = require('../models/User');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

router.get('/', (req, res) => 
  User.findAll()
    .then(users => res.render('users', {
        users
      }))
    .catch(err => res.render('error', {error: err})));


module.exports = router;