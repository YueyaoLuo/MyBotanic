const PlantCollection = require('../models/plantCollection')

module.exports = {
    index,

}
async function index(req, res) {

    try {
        const plantCollections = await PlantCollection.find({});
        res.render('plantCollections/index', { plantCollections });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}