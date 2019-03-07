const express = require('express'),
  router = express.Router({ strict: true }),
  detail = require('./detail'),
  results = require('./results')

router
  .get('/items', results)
  .get('/items/:id', detail)

module.exports = router