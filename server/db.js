const development = require('./knexfile').development
const database = require('knex')(development)

module.exports = {
  getAllComments,
  getCommentById,
  addComments
}

function getAllComments (db = database) {
  return db('reviews').select()
}

function getCommentById(commentId, db = database) {
  return db('reviews')
  .where('id', commentId)
  .first()
}

function addComments(newComment, db = database) {
  return db('reviews').insert({...newComment})
}

