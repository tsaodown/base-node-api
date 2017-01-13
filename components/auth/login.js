// @flow

import conf from 'config'
import jwt from 'jwt-simple'

import { Router } from 'express'

import Passport from './passport.config'

export default class Login {
  router = null

  constructor (p: Passport) {
    this.router = Router()

    this.router.post('/token',
      p.local,
      (req, res) => {
        let token = jwt.encode({
          id: 1
        }, conf.get('jwt.secret'))
        res.json({
          user: 'test',
          token: token
        })
      }
    )
  }
}
