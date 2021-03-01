require('dotenv').config()
require('./database')
const express = require('express')
const app = express()
const morgan = require('morgan')
const { corsConfig, error } = require('./middlewares')
const routes = require('./routes')

app.use(express.json())

app.use(morgan('dev'))
corsConfig(app)
app.use(routes)
error(app)

module.exports = { app }