const Post = require('../models/post')

module.exports = {
    index,
    show,
    new: Newpost,
    create,

}

async function index(req, res) {
    //to show posts in order by date/time
    const posts = await Post.find({}).sort('date')
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
        const post = await Post.create(req.body);
        const postCreatedate = post.createdAt;
        const postEditdate = post.updatedAt;
        const formattedCreateDate = postCreatedate.toISOString().slice(0, 16)
        const formattedEditDate = postEditdate.toISOString().slice(0, 16)
        res.render('posts/index', { post, formattedCreateDate, formattedEditDate })
    } catch (err) {
        console.error(err)
        res.render('posts/index', { errorMsg: err.message })
    }
}
