const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const path = require('path')

//
const db = require('./config/db')


//Test db
db.authenticate()
  .then(() => console.log('db connected'))
  .catch(err => console.log(err))



const app = express()





const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log('server is running on port5000'));


