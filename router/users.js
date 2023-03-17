const express = require('express');
const router = express.Router();
const UserCtrl = require('../controllers/users');
const JWTGuardian = require('../middlewares/jwtguardian');
const validateUser = require('../middlewares/validateuser')

router.use( (req, res, next) => {
    console.log('Request : ' + Date().toString());
    next()
})

router.post('/create', validateUser.validateCreation, UserCtrl.createUser);
router.get('/:id', JWTGuardian.jwtguardian, UserCtrl.readUser);
router.patch('/patch/:id', JWTGuardian.jwtguardian, UserCtrl.patchUser);
router.delete('/delete/:id', JWTGuardian.jwtguardian, UserCtrl.deleteUser);

module.exports = router;