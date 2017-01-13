// @flow

import { Router } from 'express'

import Passport from './passport.config'

import Login from './login'

import { LoginBacking } from '../../index'

export default class Auth {
  router = null

  constructor (lb: LoginBacking) {
    const passport = new Passport(lb)

    this.router = Router()

    this.router.use(new Login(passport).router)
  }
}
