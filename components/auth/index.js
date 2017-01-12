// @flow

let passport = require('passport')
let LocalStrategy = require('passport-local').Strategy
let JWTStrategy = require('passport-jwt').Strategy
let JWTExtract = require('passport-jwt').ExtractJwt
let router = require('express').Router()

let conf = require('config')

passport.use(new LocalStrategy((username, password, done) => {
  return done(null, {
    name: 'Bob'
  })
}))

passport.use(new JWTStrategy({
  secretOrKey: conf.get('jwt.secret'),
  jwtFromRequest: (req) => {
    var token = JWTExtract.fromBodyField('token')(req)
    if (token === null) {
      token = JWTExtract.fromAuthHeader()(req)
    }
    if (token === null) {
      token = JWTExtract.fromHeader('token')(req)
    }
    return token
  }
}, (payload, done) => {
  return done(null, payload)
}))

module.exports = router

module.exports.authLocal = passport.authenticate('local', {
  session: false
})

module.exports.authJWT = passport.authenticate('jwt', {
  session: false
})

router.use(require('./login'))
