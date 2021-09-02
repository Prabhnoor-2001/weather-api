const development = require('./knexfile').development
const database = require('knex')(development)

module.exports = {
  getAllComments,
  getCommentById
}

function getAllComments (db = database) {
  return db('reviews').select()
}

function getCommentById(commentId, db = database) {
  return db('reviews')
  .where('id', commentId)
  .first()
}

// first = returns the first element
// used instead of select()

