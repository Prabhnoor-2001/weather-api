const express = require("express");

const commentRouter = require('./routes')
const server = express();


server.use(express.json())
server.use('/comments', commentRouter)
module.exports = server


// set up database for comments (Knex)  ==>     id, name, comments
// create routes for creating comments (GET)
// create route for showing comments (GET)
// create a route for getting the comments (POST)


// editing the comments  (db functions)
// deleting the comments

// components for reviews

