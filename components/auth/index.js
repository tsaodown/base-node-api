// @flow

let passport = require('passport')
let LocalStrategy = require('passport-local').Strategy
let JWTStrategy = require('passport-jwt').Strategy
let JWTExtract = require('passport-jwt').ExtractJwt

let conf = require('config')

passport.use(new LocalStrategy((username, password, done) => {
  return done(null, {
    name: 'Bob'
  })
}))

passport.use(new JWTStrategy({
  secretOrKey: conf.get('jwt.secret'),
  jwtFromRequest: JWTExtract.fromBodyField('token')
}, (payload, done) => {
  return done(null, payload)
}))

let router = require('express').Router()

router.use(require('./login'))

module.exports = router
