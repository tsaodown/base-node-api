// @flow
'use strict'

let server = require('@tsaodown/base-node')

server.get('/', (req, res) => {
  res.json('yeah!')
})
