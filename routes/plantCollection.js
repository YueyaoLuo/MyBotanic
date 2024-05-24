const express = require('express')
const router = express.Router();
const ensureLoggedIn = require('../config/ensureLoggedIn');

const plantCollectionCtrl = require('../controllers/plantCollections');

router.get('/',  ensureLoggedIn, plantCollectionCtrl.index);
router.post('/', ensureLoggedIn, plantCollectionCtrl.create);


module.exports = router;