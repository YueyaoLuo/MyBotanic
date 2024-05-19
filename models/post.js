const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
   content: {
      type: String,
      required: true
   },
   user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
   },
   userName: String,
   userAvatar: String
}, { timestamps: true })


const postSchema = new Schema({
   content: {
      type: String,
      required: true
   },
   comments: [commentSchema],
   tag: [{
      type: Schema.Types.ObjectId,
      ref: 'Tag'
   }],
      user: {
         type: Schema.Types.ObjectId,
         ref: 'User',
         required: true
      },
      userName: String,
      userAvatar: String,
      location: {
         type: { type: String },
         coordinates: [Number]
      },
      photo: {
         type: String,
      }

   }, { timestamps: true });

module.exports = mongoose.model('Post', postSchema);