const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const postSchema = new Schema({
   content: {
    type: String, 
    default: "Share your thoughts on plants",
    required: true
   },
   location: {
    type: {type: String},
    coordinates: [Number]
   },
   photos: [String]
    
}, {timestamps: true});