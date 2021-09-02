const express = require('express')
const db = require('./db')
const router = express.Router()

router.get("/", (req, res) => {
  db.getAllComments()
  .then(comment => {
    res.send(comment)
  })
});

module.exports = router