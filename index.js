// @flow
'use strict'

let passport = require('passport')

let server = require('@tsaodown/base-node')
require('./passport.config')

server.use(passport.initialize())

server.use('/auth', require('./components/auth'))
