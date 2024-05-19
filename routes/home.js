const express = require('express')
const router = express.Router();
const ensureLoggedIn = require('../config/ensureLoggedIn');

const postsCtrl = require('../controllers/posts');


router.get('/', postsCtrl.index);
router.get('/', postsCtrl.create)
router.post('/', ensureLoggedIn, postsCtrl.new)
router.get('/:id/comments', ensureLoggedIn, postsCtrl.show) //to change after set up profile for each user, then should be '/username/postId/comments'


module.exports = router;