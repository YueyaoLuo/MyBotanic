const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const plantSchema = new Schema({
    botanicalName: {
        type: String
    },
    commonName: {
        type: String
    },
    matureHeight:{
        type: Number
    },
    matureWidth:{
        type: Number
    },
    plantType:{
        type: String,
        enum: ['Tree', 'Shrub', 'Groundcover', 'Tufting','Succulent']
    },
    Native: {
        type: Boolean, 
        default: true
    },
    Notes: {
        type: String
    }
},{timestamps: true});

const plantCollectionSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    description: {
        type: String
    },
    collectionName: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        default: "/images/logo.png" //path to default image file
    },
    plants: {
       plantSchema
    }

}, { timestamps: true })


module.exports = mongoose.model('PlantCollection', plantCollectionSchema);