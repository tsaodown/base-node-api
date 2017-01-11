// @flow

let passport = require('passport')
let LocalStrategy = require('passport-local').Strategy

passport.use(new LocalStrategy((username, password, done) => {
  return done(null, {
    name: 'Bob'
  })
}))

let router = require('express').Router()

router.use(require('./login'))

module.exports = router
