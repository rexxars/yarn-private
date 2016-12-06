var registry = require('mock-private-registry')

var token = 'MySecretToken'

registry({port: 18888, token: token, debug: true}, function (err, server) {
  if (err) {
    throw err
  }

  console.log('Mock registry listening on port 18888')
})
