// @flow
'use strict'

let passport = require('passport')

let auth = require('./components/auth')
let server = require('@tsaodown/base-node')

server.use(passport.initialize())

server.use(auth)
