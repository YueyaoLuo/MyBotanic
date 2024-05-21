const express = require('express')
const router = express.Router();
const ensureLoggedIn = require('../config/ensureLoggedIn');

const usersCtrl = require('../controllers/users');


// show users profile home page

router.get('/:name', ensureLoggedIn, usersCtrl.index)


module.exports = router;