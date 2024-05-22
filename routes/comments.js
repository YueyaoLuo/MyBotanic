const express = require('express')
const router = express.Router();
const ensureLoggedIn = require('../config/ensureLoggedIn');

const commentsCtrl = require('../controllers/comments');


// show post details and all comments

router.post('/posts/:id', ensureLoggedIn, commentsCtrl.create)


module.exports = router;