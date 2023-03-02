const express = require('express')
const mongoose = require('mongoose')
const route = require('./routes/routers')
const app = express()

app.use(express.json())
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

mongoose.set('strictQuery', true)

mongoose.connect('mongodb+srv://Jyoticoder:Jyoti2025@jyoticoder-cluster.ljxxb2x.mongodb.net/calender', { useNewUrlParser: true })
    .then(() => { console.log('MongoDB is connected') })
    .catch((error) => { console.log(error) })

app.use('/', route)

app.listen(3001, function () {
    console.log('Express app running on port ' + 3001)
})