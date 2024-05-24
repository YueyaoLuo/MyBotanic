const PlantCollection = require('../models/plantCollection')

module.exports = {
    index,
    create
}
async function index(req, res) {

    try {
        const plantCollections = await PlantCollection.find({user: req.user._id});
        res.render('plantCollections/index', { plantCollections });
        // console.log("this users collections are:", plantCollections)
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

async function create(req, res) {
    try {
        const plantCollection = {
            description: req.body.description,
            collectionName: req.body.name,
            user: req.user._id,
        }
        const newcollection = await PlantCollection.create(plantCollection);
        // console.log("new collection created", newcollection)

    } catch (err) {
        console.error(err)
    }

    const plantCollections = await PlantCollection.find({user: req.user._id});
    res.render('plantCollections/index', { plantCollections })
}