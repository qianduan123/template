'use strict'
module.exports = {
  'dev': {
    NODE_ENV: '"development"',
    API_ROOT: '"/ezr/"'
  },
  'test': {
    NODE_ENV: '"test"',
    API_ROOT: '"http://192.168.12.106:3000/"'
  },
  'prod': {
    NODE_ENV: '"production"',
    API_ROOT: '"http://106.75.100.46/"'
  }
}