const express = require('express')
const router = express.Router();
const ensureLoggedIn = require('../config/ensureLoggedIn');

const postsCtrl = require('../controllers/posts');


router.get('/', postsCtrl.index);
router.get('/', ensureLoggedIn, postsCtrl.new)
router.post('/', ensureLoggedIn, postsCtrl.create)



module.exports = router;