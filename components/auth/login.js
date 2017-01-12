// @flow

let jwt = require('jwt-simple')
let router = require('express').Router()

let authLocal = require('./index').authLocal

let conf = require('config')

router.post('/token',
  authLocal,
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

module.exports = router
