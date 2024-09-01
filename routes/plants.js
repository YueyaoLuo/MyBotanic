const express = require('express')
const router = express.Router();
const ensureLoggedIn = require('../config/ensureLoggedIn');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


const plantsCtrl = require('../controllers/plants');

router.get('/plantCollections/:id/plants/new',ensureLoggedIn, plantsCtrl.new)
// router.get('/plantCollections/:id/plants/:id', plantsCtrl.show);
router.post('/plantCollections/:id', ensureLoggedIn,upload.single('plantPhoto'), plantsCtrl.create);

router.get('/plantCollections/:id/plants/:id', ensureLoggedIn, plantsCtrl.show)
module.exports = router;