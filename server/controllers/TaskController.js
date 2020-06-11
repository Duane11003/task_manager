const pool = require("../model/TaskModel");

const taskController = {};

taskController.addTask = (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const values = [req.body.title, req.body.description, req.body.deadline];
  const QUERY_STRING = `INSERT INTO tasks (title, description, deadline) VALUES ($1, $2, $3) RETURNING *`;
  pool.query(QUERY_STRING, values, (err, data) => {
    if (err) {
      console.warn(err, "is the error");
    } else {
      res.status(200);
    }
  });
  next();
};

module.exports = taskController;
