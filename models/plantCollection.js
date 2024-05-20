const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const plantCollectionSchema = new Schema({
    description: {
       type: String
    },
    collectionName: {
        type: String,
        required: true
    },
    cover: {
        type: String,
        default: "/images/logo.png" //path to default image file
    }
 }, { timestamps: true })

 
module.exports = mongoose.model('PlantCollection', plantCollectionSchema);