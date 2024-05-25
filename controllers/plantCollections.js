const PlantCollection = require('../models/plantCollection')

module.exports = {
    index,
    create,
    show,
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

async function show(req, res) {
    try {
        // console.log(req.params)
        const plantCollection = await PlantCollection.findById(req.params.id);
        if (!plantCollection) {
            return res.send('plantCollection not found');
        }
        const plants = plantCollection.plants
        console.log(plants)
        res.render('plantCollections/show', { plantCollection, plants });
    } catch (error) {
        console.error('Error fetching post:', error);
    }
}