const PlantCollection = require('../models/plantCollection')

module.exports = {
    new: Newplant,
    create,
    show,
}

async function Newplant(req, res) {

    const plantCollection = await PlantCollection.findById(req.params.id)
    res.render('plants/new', { title: 'Add Plant', plantCollection })

}

async function create(req, res) {
    try {
        const plantCollection = await PlantCollection.findById(req.params.id)
        let body = req.body

        if ("Native" in body) {
            body.Native = true;
        } else {
            body.Native = false;
        }
        plantCollection.plants.push(body)
        await plantCollection.save();

        res.render('plantCollections/show', { plantCollection })
    } catch (err) {
        console.error(err)
    }
}

async function show(req, res) {
    try {
        console.log("this is req.params.id", req.params.id)
        const plantCollection = await PlantCollection.findOne({ 'plants._id': req.params.id })
        if (plantCollection) {
            const plant = plantCollection.plants.id(req.params.id);
            console.log("this is plant", plant);
            res.render('plants/show', {plant});
        } else {
            console.log("Plant not found");
        }
        
    } catch (error) {
        console.error('Error fetching plant:', error);
    }
}

