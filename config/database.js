const mongoose = require('mongoose');
const Post = require('../models/post');
const { Admin } = require('mongodb');

mongoose.connect(process.env.DATABASE_URL);
	
// shortcut to mongoose.connection object
const db = mongoose.connection;
	

async function checkAndInsertedDeafultData(){
  try {
    const count = await Post.countDocuments();
    if (count === 0) {
      const defaultPosts = [
        {
          content: 'This is the first post',
          user: {
            userName: Admin
          },
          comments: [{
            content: 'comment test 1',
            userName: Admin,
            // userAvatar: 
          }, {
            content: 'comment test 2',
            userName: Admin,
            // userAvatar:
          }]
        }, {
          content: 'This is the second post',
          user: {
            userName: Admin
          },
          comments: [{
            content: 'comment test 3',
            userName: Admin,
            // userAvatar: 
          }, {
            content: 'comment test 4',
            userName: Admin,
            // userAvatar:
          }]
        }
      ]
    }
  } catch(err){
    console.error('Error inserting default data', err)
  }
}



db.on('connected', function() {
  checkAndInsertedDeafultData()
  console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
});