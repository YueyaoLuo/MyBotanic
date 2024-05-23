const Post = require('../models/post')

module.exports = {
    index,
    new: Newpost,
    create,
    show,
    edit,
    update,
    delete: Deletepost
}

async function index(req, res) {
    
    const posts = await Post.find({});
    // console.log('Fetched posts for index:', posts); //test if it is reading post
    res.render('posts/index', { posts })
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
        await Post.create(post);

    } catch (err) {
        console.error(err)
    }
    const posts = await Post.find({}).sort('date'); // Re-fetch all posts

    res.render('posts/index', { posts })
}

async function show(req, res) {
    try {
        console.log(req.params)
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.send('Post not found');
        }
        console.log('this is post info:', post);
        res.render('posts/show', { post });
    } catch (error) {
        console.error('Error fetching post:', error);
    }
}


async function edit(req, res){

    const post = await Post.findById(req.params.id);
    // Redirect back to the post's show view
    res.render('posts/edit', {title: 'Edit post', post});
}


async function update(req, res){
    try{
        const post = await Post.findById(req.params.id);

        if (!post) return res.redirect('/home');
      
        const updatedContent = req.body //get object {content: req.body}
        console.log("This is the udpated post content", updatedContent)
        post.content = updatedContent.content

        await post.save()
        console.log('this is the updated post:', post)
        res.redirect(`/posts/${post._id}`)
    }catch (err) {
      console.log(err);
    }
}


async function Deletepost(req, res){
    const post = await Post.findById(req.params.id);
    console.log(post)
    if (!post) return res.redirect('/home');

    // await post.remove();
    await Post.findByIdAndDelete(req.params.id);
    res.redirect('/home')
}
