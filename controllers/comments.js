const Post = require('../models/post')

module.exports = {
    create,
    delete: deleteComment,
    

}



async function deleteComment(req, res){
    const post = await Post.findOne({'comments._id': req.params.id, 'comments.user': req.user._id})
    if (!post) return res.redirect('/posts');

    post.comments.remove(req.params.id);
    await post.save();
    res.redirect(`/posts/${post._id}`)
}

async function create(req, res) {

    const post = await Post.findById(req.params.id);
    // console.log(post)
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;


    console.log(req.body)
    post.comments.unshift(req.body); //to sort descending by created time

    try {
        await post.save();
        // console.log(post)
    } catch (err) {
        console.error(err)
    }

    res.redirect(`/posts/${post._id}`)
}

