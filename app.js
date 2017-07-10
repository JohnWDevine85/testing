const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose')
mongoose.promise = require('bluebird')
mongoose.connect = ('mongodb://localhost:27017/testing')

const routes = require('./Routes/customer_router')

app.use(routes)

app.listen(3000, function () {
  console.log('In the Pipe Five by Five')
})
