// @flow
'use strict'

import passport from 'passport'

import Auth from './components/auth'
import server from '@tsaodown/base-node'

export class LoginBacking {
  x: number
}

export default class API {
  server = server
  lb: LoginBacking

  constructor (lb: LoginBacking) {
    this.lb = lb
    server.use(passport.initialize())

    server.use(new Auth(lb).router)
  }
}
