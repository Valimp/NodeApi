const User = require('../models/users');
const jwt = require('jsonwebtoken');

exports.login = async ( req, res ) => {

    let statusCode = 200;

    const { email, password } = req.body;

    const user = await User.findOne({ 'email': email });
    
    if(user === null){
        statusCode = 404;
        res.status(statusCode).send()
    } else {
        if(user.email === email && user.password === password) {

            // Generate JWT and send it
            const JWT = jwt.sign( { email }, process.env.PRIVATE_KEY, { algorithm: 'RS256' } );
            res.status(statusCode).send(JWT);

        } else {
            
            // Bad password
            statusCode = 404;
            res.status(statusCode).send();

        };
    };
};

exports.logout = async ( req, res ) => {
    console.log('Logout request');
    res.status(200).send();
};