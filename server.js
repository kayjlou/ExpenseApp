const express = require('express')
const { join } = require('path')
const app = express()

require('dotenv').config()

let PORT = process.env.PORT || 3001
let MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/expenseApp'

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

require('./routes')(app)

require('mongoose').connect(MONGODB_URI, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: true })
  .then(_ => app.listen(PORT))
  .then(_=> console.log("success connected to port " + PORT))
  .catch(e => console.log(e))