const {Router} = require("express")

const TestController = Router()

TestController.get('', (req, res) =>{
    res.send("testando aplicação!")

})

module.exports = TestController