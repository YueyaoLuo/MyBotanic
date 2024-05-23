const express = require('express')
const router = express.Router();
const ensureLoggedIn = require('../config/ensureLoggedIn');

const postsCtrl = require('../controllers/posts');

//edit post
router.get('/:id/edit', ensureLoggedIn, postsCtrl.edit)

// show post details and all posts
router.get('/:id', postsCtrl.show) 


//update post
router.put('/:id', ensureLoggedIn, postsCtrl.update)

router.delete('/:id', ensureLoggedIn, postsCtrl.delete)

module.exports = router;