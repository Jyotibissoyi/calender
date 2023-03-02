const express = require('express')
const mongoose = require('mongoose')
const route = require('./routes/routers')
const app = express()

app.use(express.json())

mongoose.set('strictQuery', true)

mongoose.connect('mongodb+srv://Jyoticoder:Jyoti2025@jyoticoder-cluster.ljxxb2x.mongodb.net/coder', { useNewUrlParser: true })
    .then(() => { console.log('MongoDB is connected') })
    .catch((error) => { console.log(error) })

app.use('/', route)

app.listen(3001, function () {
    console.log('Express app running on port ' + 3001)
})