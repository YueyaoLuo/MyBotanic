const PlantCollection = require('../models/plantCollection')

module.exports = {
    new: Newplant,
    create,
    show,
}

async function Newplant(req, res){
    
    const plantCollection = await PlantCollection.findById(req.params.id)
    res.render('plants/new', { title: 'Add Plant', plantCollection })

}

async function create(req, res) {
    try {
        const plantCollection = await PlantCollection.findById(req.params.id)
        let body = req.body
        
            if ("Native" in body){
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
        console.log("this is req.params.id",req.params.id)
        console.log("this is plants", PlantCollection)
        console.log("this is plants", PlantCollection.plants)
        // const plants = await PlantCollection.plants.findById(req.params.id)
        // console.log("this are plants in the collection:",plants)
        if (!plants) {
            return res.send('plant not found');
        }
        // console.log('this is plant info:', plant);
        res.render('plants/show', {  });
    } catch (error) {
        console.error('Error fetching plant:', error);
    }
}

