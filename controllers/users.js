const User = require('../models/users');


// Create a new user
exports.createUser = async ( req, res ) => {

    try {
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });

        const user = await newUser.save();

        res.status(201).json({ user });

    } catch (error) {

        res.status(400).json({ error })

    };
};

// Read a user
exports.readUser = async ( req, res ) => {
    
    const user = await User.findOne({ _id: req.params.id })
    .then( (user) => {
        return res.status(200).json({user})
    })
    .catch( (error) =>{
        return res.status(400).json({error})
    });
};

// Patch a user
exports.patchUser = async ( req, res ) => {
    await User.updateOne({ _id: req.params.id }, { $set: req.body })
    .then( (user) =>{
        return res.status(200).json({user})
    })
    .catch ( (error) =>{
        return res.status(400).json({error})
    });
};

// Delete a user
exports.deleteUser = async ( req, res ) => {

    await User.deleteOne({ _id: req.params.id })
    .then( () => {
        return res.status(204).json({'message': 'User deleted'})
    })
    .catch( (error) => {
        return res.status(400).json({error})
    });
};