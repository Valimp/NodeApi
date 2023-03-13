require('dotenv').config()
const express = require('express');
const app = express();
const { default: mongoose } = require('mongoose');
const bodyParser = require('body-parser');
const RoutesUsers = require('./router/users');
const RoutesAuth = require('./router/auth')

mongoose.connect(`${process.env.DATABASE_URL}`,
{
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then( () => {
    console.log('Connection to the database is a success ! 👌');
}).catch( (error) => {
    console.log('Connection to the database failed.. 👎 ');
    console.log(error);
});

app.use(bodyParser.json());
app.use('/api/users/', RoutesUsers);
app.use('/api/auth/', RoutesAuth);

module.exports = app;