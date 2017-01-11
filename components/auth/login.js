// @flow

let passport = require('passport')

let router = require('express').Router()

router.post('/login',
  passport.authenticate('local', {
    session: false
  }), (req, res) => {
    res.json('yup')
  }
)

module.exports = router
