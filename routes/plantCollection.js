const express = require('express')
const router = express.Router();


const plantCollectionCtrl = require('../controllers/plantCollections');

router.get('/', plantCollectionCtrl.index);

module.exports = router;