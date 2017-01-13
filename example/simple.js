// @flow

import API, { LoginBacking } from '../index'

class Test extends LoginBacking {
  constructor (x: number) {
    super()
    this.x = x
  }
}

let api = new API(new Test(2))

api.server.get('/', (req, res) => {
  res.json('bleh')
})
