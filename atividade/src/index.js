const express = require("express")
const routes = require("./routes")

const app = express();

app.use(routes)
app.listen(3333);

app.get('/src', (request, response) => {
    return response.send("testando aplicação!");
})
