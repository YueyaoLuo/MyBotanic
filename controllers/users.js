const User = require('../models/user')

module.exports = {
    index, //profile page

}

async function index(req, res) {
    try {
        console.log('Request received:', req.params.name);
        const user = await User.findOne({name: req.params.name});
        if (user) {
            console.log(user)
            const userProfile = {
                userName: user.name,
                userAvatar: user.avatar,
            }
            res.render('profiles/index', { userProfile })
        } else {
            res.send('User not found')
        }
    } catch (error) {
        console.error('Error fetching user:', error);
    }
}


