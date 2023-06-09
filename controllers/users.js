const User = require('../models/users');
const bcrypt = require('bcrypt');


// Create a new user
exports.createUser = async ( req, res ) => {

    try {

        const password = req.body.password;

        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);

        const hashedPassword = bcrypt.hashSync( password, salt );

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        });

        const user = await newUser.save();

        res.status(201).json({ user });

    } catch (error) {

        res.status(400).json({ error });

    };
};

// Read a user
exports.readUser = async ( req, res ) => {

    try {

        const user = await User.findOne({ _id: req.params.id });

        res.status(200).json({ user });

    } catch (error) {

        res.status(400).json({ error });

    };
};

// Patch a user
exports.patchUser = async ( req, res ) => {

    try {

        const user = await User.updateOne({ _id: req.params.id }, { $set: req.body });

        res.status(200).json({user});

    } catch (error) {

        res.status(400).json({error});

    };
};

// Delete a user
exports.deleteUser = async ( req, res ) => {

    try {

        await User.deleteOne({ _id: req.params.id });

        res.status(204).json();

    } catch (error) {

        res.status(400).json({error});

    };
};