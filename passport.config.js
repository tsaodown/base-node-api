let passport = require('passport')
let LocalStrategy = require('passport-local').Strategy

passport.use(new LocalStrategy((username, password, done) => {
  return done(null, {
    name: 'Bob'
  })
}))
