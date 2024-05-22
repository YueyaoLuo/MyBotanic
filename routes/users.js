const express = require('express')
const router = express.Router();
const ensureLoggedIn = require('../config/ensureLoggedIn');

const usersCtrl = require('../controllers/users');


// show users profile home page

router.get('/:id', ensureLoggedIn, usersCtrl.show)


module.exports = router;