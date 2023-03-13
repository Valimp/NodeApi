const express = require('express');
const router = express.Router();
const UserCtrl = require('../controllers/users');
const JWTGuardian = require('../middlewares/jwtguardian');

router.use( (req, res, next) => {
    console.log('Request : ' + Date().toString());
    next()
})

router.post('/create', UserCtrl.createUser);
router.get('/:id', JWTGuardian.jwtguardian, UserCtrl.readUser);
router.patch('/patch/:id', UserCtrl.patchUser);
router.delete('/delete/:id', UserCtrl.deleteUser);

module.exports = router;