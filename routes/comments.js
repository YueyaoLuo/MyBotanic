const express = require('express')
const router = express.Router();
const ensureLoggedIn = require('../config/ensureLoggedIn');

const commentsCtrl = require('../controllers/comments');


// show post details and all comments

//create comments
router.post('/posts/:id/comments', ensureLoggedIn, commentsCtrl.create)
router.delete('/comments/:id', ensureLoggedIn, commentsCtrl.delete)



module.exports = router;