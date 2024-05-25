const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const plantSchema = new Schema({
    botanicalName: {
        type: String
    },
    commonName: {
        type: String,
        required: true
    },
    matureHeight: {
        type: Number
    },
    matureWidth: {
        type: Number
    },
    plantType: {
        type: String,
        enum: ['Tree', 'Shrub', 'Groundcover', 'Tufting', 'Succulent']
    },
    Native: {
        type: Boolean,
        default: true
    },
    Notes: String,
    plantPhoto: {
        type: String,
        default: "/images/tea-leaves.png"
    }
}, { timestamps: true });

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
        default: "/images/logo.png" //path to default image file as collection cover
    },
    plants: [
        plantSchema
   ]

}, { timestamps: true })


module.exports = mongoose.model('PlantCollection', plantCollectionSchema);