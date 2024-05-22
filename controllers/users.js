const User = require('../models/user')

module.exports = {
    show, //profile page

}

async function show(req, res) {
    try {
        console.log('Request received:', req.user._id);
        const user = await User.findById(req.user._id);
        if (user) {
            console.log(user)
            const userProfile = {
                userName: user.name,
                userAvatar: user.avatar,
            }
            console.log(userProfile)
            res.render('users/show', { userProfile })
        } else {
            res.send('User not found')
        }
    } catch (error) {
        console.error('Error fetching user:', error);
    }
}