const User = require('../models/User')

class SessionController {
  async store (req, res) {
    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (!user || !(await user.compareHash(password))) {
      return res.status(400).json({ error: 'User or password not found' })
    }
    return res.json({ user, token: User.generateToken(user) })
  }
}

module.exports = new SessionController()
