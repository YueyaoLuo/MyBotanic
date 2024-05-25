const express = require('express')
const router = express.Router();
const ensureLoggedIn = require('../config/ensureLoggedIn');

const plantsCtrl = require('../controllers/plants');

router.get('/plantCollections/:id/plants/new',ensureLoggedIn, plantsCtrl.new)
// router.get('/plantCollections/:id/plants/:id', plantsCtrl.show);
router.post('/plantCollections/:id', ensureLoggedIn, plantsCtrl.create);

router.get('/plantCollections/:id/plants/:id', ensureLoggedIn, plantsCtrl.show)
module.exports = router;