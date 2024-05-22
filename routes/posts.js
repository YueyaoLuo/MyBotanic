const express = require('express')
const router = express.Router();


const postsCtrl = require('../controllers/posts');


// show post details and all comments

router.get('/:id', postsCtrl.show) 


module.exports = router;