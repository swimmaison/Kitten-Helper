const jsonwebtoken = require('jsonwebtoken')
module.exports = {
  authMiddleware: function (req, res, next) {
    if (
      req.headers &&
        req.headers.authorization &&
        req.headers.authorization.split(' ')[0] === 'Bearer'
    ) {
      jsonwebtoken.verify(
        req.headers.authorization.split(' ')[1],
        process.env.JWT_SECRET,
        function (err, decode) {
          if (err) req.user = undefined
          req.user = decode
          next()
        }
      )
    } else {
      req.user = undefined
      next()
    }
  }
}
