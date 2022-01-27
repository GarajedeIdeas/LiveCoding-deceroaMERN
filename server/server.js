const express = require('express')
const app = express()

// DB connection
const mongoose = require('mongoose')
mongoose
    .connect('mongodb://localhost/garaje-live-coding')
    .then(() => console.log('CONECTADO A BBDD'))


// Model
const Coaster = require('./Models/Coaster.model')


// CORS
const cors = require('cors')
app.use(cors())

// Routing
app.get('/api/coasters', (req, res) => {

    Coaster
        .find()
        .then(allCoasters => res.json(allCoasters))
})


app.get('/api/details/:coaster_id', (req, res) => {

    const { coaster_id } = req.params

    Coaster
        .findById(coaster_id)
        .then(coaster => res.json(coaster))
})

app.listen(5005, () => console.log('SERVIDOR LEVANTADO'))