const Post = require('../models/post')

module.exports = {
    index,
    show,
    new: Newpost,
    create,

}

async function index(req, res) {
    //to show posts in order by date/time
    const posts = await Post.find({}).sort('date');
    console.log('Fetched posts for index:', posts);
    res.render('posts/index', { posts })
}

async function show(req, res) {
    const post = await Post.findById(req.params.id);
    res.render('posts/show', { post })
    // to send time for post and comments
}


function Newpost(req, res) {
    res.render('posts/index', { title: 'New Post', errorMsg: '' })
}

async function create(req, res) {
    try {
        const post = {
            content: req.body.content,
            user: req.user.id,
            userName: req.user.name,
            userAvatar:req.user.avatar,
        }
        console.log(post)
        await Post.create(post);

    } catch (err) {
        console.error(err)
    }
    const posts = await Post.find({}).sort('date'); // Re-fetch all posts
    console.log('fechted all posts', posts)
    res.redirect('posts/index', { posts })
}
