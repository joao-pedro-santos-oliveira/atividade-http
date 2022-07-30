const express = require("express")
const TestController = require("./controllers/TestController")

const controllers = express()

controllers.use('/', TestController)

module.exports = controllers