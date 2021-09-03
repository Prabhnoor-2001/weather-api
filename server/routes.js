const express = require('express')
const db = require('./db')
const router = express.Router()

router.get("/", (req, res) => {
  db.getAllComments()
  .then(comment => {
    res.send(comment)
  })
});

router.post("/add", (req, res) => {
  const { name, comments } = req.body
  const incomingComments = {
    name,
    comments
  }
  db.addComments(incomingComments)
  .then(([id]) => {
    db.getCommentById(id)
    .then(data => {
      res.send(data)
    })
  }) .catch(err => {
    console.error(err)
    res.status(500).send('aint no comment coming this way')
  })
})

router.patch("/edit/:id", (req, res) => {
  const id = req.params.id
  const { name, comments } = req.body
  const incomingChanges = {
    name,
    comments
  }
  db.editComments(incomingChanges, id)
  .then(comment => {
    res.send(comment)
  })
  .catch(err => {
    console.log(err)
    res.status(500).send('no changes to be seen')
  })
})

module.exports = router