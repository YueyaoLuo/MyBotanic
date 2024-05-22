const Post = require('../models/post')

module.exports = {

    create,

}



async function create(req, res) {

    const post = await Post.findById(req.params.id);
    console.log(post)
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;


    console.log(req.body)
    post.comments.push(req.body);

    try {
        await post.save();
        console.log(post)
    } catch (err) {
        console.error(err)
    }

    res.redirect(`/posts/${post._id}`)
}

