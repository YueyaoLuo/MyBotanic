const PlantCollection = require('../models/plantCollection')

module.exports = {
    new: Newplant,
    create,

    // show,

    // delete: Deleteplant
}

async function Newplant(req, res){
    
    const plantCollection = await PlantCollection.findById(req.params.id)
    res.render('plants/new', { title: 'Add Plant', plantCollection })

}

async function create(req, res) {
    try {
        const plantCollection = await PlantCollection.findById(req.params.id)
        console.log("this is plantCollection:", plantCollection)
        console.log("this is req.body", req.body)
        let body = req.body
        
            if ("Native" in body){
                console.log("Native")
                body.Native = true;
            } else {
                console.log("Not true")
                body.Native = false;
            }
        console.log(body)
        plantCollection.plants.push(body) 
        await plantCollection.save();

        console.log("this is the updated plantCollection:", plantCollection)
        res.render('plantCollections/show', { plantCollection })
    } catch (err) {
        console.error(err)
    }
}

// async function show(req, res) {
//     try {
//         // console.log(req.params)
//         const plant = await Plant.findById(req.params.id);
//         if (!plant) {
//             return res.send('plant not found');
//         }
//         // console.log('this is plant info:', plant);
//         res.render('plants/show', { plant });
//     } catch (error) {
//         console.error('Error fetching plant:', error);
//     }
// }



// async function Deleteplant(req, res){
//     const plant = await plant.findById(req.params.id);
//     console.log(plant)
//     if (!plant) return res.redirect('plantCollections/show');

//     await Plant.findByIdAndDelete(req.params.id);
//     res.redirect('plantCollections/show')
// }