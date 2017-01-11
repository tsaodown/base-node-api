// @flow

let jwt = require('jwt-simple')
let passport = require('passport')

let conf = require('config')

let router = require('express').Router()

router.post('/login',
  passport.authenticate('local', {
    session: false
  }), (req, res) => {
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
