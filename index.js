/**
 * index.js represents the entry point of the application, it shoudl configure any required dependencies
 * and configure route handlers required for the project to work
 */

const express = require('express')
const mongoose = require('mongoose')
const User = require('./models/user')
const ExpenseReport = require('./models/expense_report')

const app = express()

/**
 * Declare your middleware here, for example: body-parser, passportjs, express-sessions
 */



/**
 * Declare your route handlers here
 */



app.listen(3000, function () {
  console.log('Listening on port 3000...')
})
