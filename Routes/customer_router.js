const express = require('express')
const router = require('express').Router()
const Item = require('../Database/Schema').Item

router.post('api/vendor/items', function (req, res) {
  let item = new Item()
  item.cost = '45'
  item.save()
  .then(function () {
  res.json(item)
  })
  .catch(function (error) {
    res.status(418).json(error)
  })
})


router.get('/api/customers/items', function (req, res) {
  res.json('')
})

module.exports = router
