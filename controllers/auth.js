const User = require('../models/users');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.login = async ( req, res ) => {

    const { email, password } = req.body;

    try {

        const user = await User.findOne({ 'email': email });

        if (user === null) {
            res.status(404).send()
        } else {

            const passwordMatch = bcrypt.compareSync( password, user.password )

            if (passwordMatch) {

                // Generate JWT and send it
                const JWT = jwt.sign( { email }, process.env.PRIVATE_KEY, { algorithm: 'RS256' } );

                res.status(200).send(JWT);

            } else {

                res.status(401).send()

            };
        };
    } catch (error) {

        res.status(400).json({ error })

    };
};

exports.logout = async ( req, res ) => {
    console.log('Logout request');
    res.status(200).send();
};