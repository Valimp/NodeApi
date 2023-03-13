const express = require('express');
const router = express.Router();
const AuthCtrl = require('../controllers/auth');

router.post("/login", AuthCtrl.login);
router.get("/logout", AuthCtrl.logout);

module.exports = router;