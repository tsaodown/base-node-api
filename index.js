// @flow
'use strict'

let passport = require('passport')

let server = require('@tsaodown/base-node')

server.use(passport.initialize())

server.use('/auth', require('./components/auth'))

server.post('/', passport.authenticate('jwt', {
  session: false
}), (req, res) => {
  console.log(req.user)
  res.json('testage')
})
