const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const db = require('../models')

module.exports = {
  signup: function (req, res) {
    console.log('new stuff', req.body)
    const newUser = new db.User(req.body)
    newUser.password = bcrypt.hashSync(req.body.password, 8)
    db.User.create(newUser)
      .then((user) => {
        console.log('new user', user)
        user.password = undefined
        return res.json({
          _id: user._id,
          token: jwt.sign(
            { email: user.email, username: user.username, _id: user._id },
            process.env.JWT_SECRET
          )
        })
      })
      .catch((err) => {
        console.log(err)
        return res.status(400).send({
          message: err
        })
      })
  },

  login: function (req, res) {
    db.User.findOne(
      {
        email: req.body.email
      },
      function (err, user) {
        if (err) throw err
        if (!user || !user.comparePassword(req.body.password)) {
          return res.status(401).json({
            message: 'Authentication failed. Invalid user or password.'
          })
        }
        return res.json({
          token: jwt.sign(
            { email: user.email, username: user.username, _id: user._id },
            process.env.JWT_SECRET
          )
        })
      }
    )
  }
}

// exports.loginRequired = function (req, res, next) {
//   if (req.user) {
//     next();
//   } else {
//     return res.status(401).json({ message: "Unauthorized user!!" });
//   }
// };
// exports.profile = function (req, res, next) {
//   if (req.user) {
//     res.send(req.user);
//     next();
//   } else {
//     return res.status(401).json({ message: "Invalid token" });
//   }
// };
