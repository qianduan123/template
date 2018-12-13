'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
const allEnv = require('./all.env')

module.exports = merge(prodEnv, allEnv.dev)
