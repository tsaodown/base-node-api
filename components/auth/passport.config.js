// @flow

import config from 'config'
import passport from 'passport'

import { Strategy as LocalStrategy } from 'passport-local'
import { Strategy as JWTStrategy,
         ExtractJwt as JWTExtract } from 'passport-jwt'

import { LoginBacking } from '../../index'

passport.use(new LocalStrategy((username, password, done) => {
  return done(null, {
    name: 'Bob'
  })
}))

passport.use(new JWTStrategy({
  secretOrKey: config.get('jwt.secret'),
  jwtFromRequest: (req) => {
    let token = JWTExtract.fromBodyField('token')(req)
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

export default class Passport {
  local = passport.authenticate('local', {
    session: false
  })
  jwt = passport.authenticate('jwt', {
    session: false
  })
  lb = null

  constructor (lb: LoginBacking) {
    this.lb = lb
  }
}
