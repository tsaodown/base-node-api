// @flow

import API, { LoginBacking } from '../index'

class Test {
  constructor () {
    (this: LoginBacking)
  }

  getUser (uuid: string): Object {
    console.log('get')
    return {
      name: 'Bob'
    }
  }
}

let api = new API(new Test())

api.server.get('/', (req, res) => {
  res.json('bleh')
})
