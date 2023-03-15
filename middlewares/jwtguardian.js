const jwt = require('jsonwebtoken');

exports.jwtguardian = ( req, res, next ) => {

    const idToken = req.headers.authorization;

    jwt.verify(idToken, process.env.PUBLIC_KEY, ( err, decoded ) => {
        if(err){

            res.status(401).send('Unauthorized');

        } else {

            next();

        };
    });
};