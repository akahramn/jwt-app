const express = require('express')
require('./mongoose-connection')
const indexRouter = require('./route/indexRouter')
const bodyParser = require('body-parser')


const app = express()
const port = 8091

app.use(bodyParser.json())

app.use('/api', indexRouter)






app.listen(port, () => {
    console.log(`Port ${port} started listening`)
})