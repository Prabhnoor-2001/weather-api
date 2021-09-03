const express = require("express");
const cors = require("cors");
const commentRouter = require("./routes");
const server = express();
server.use(cors());

server.use("/comments", commentRouter);
module.exports = server;

// set up database for comments (Knex)  ==>     id, name, comments

// create routes for creating comments (GET)
// create a route for getting the comments (POST)

// show comments
// editing the comments  (db functions)
// deleting the comments

// components for reviews
