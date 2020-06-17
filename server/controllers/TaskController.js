const pool = require("../model/TaskModel");

const taskController = {};

// add task
taskController.addTask = (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const values = [req.body.title, req.body.description, req.body.deadline];
  const QUERY_STRING = `INSERT INTO tasks (title, description, deadline) VALUES ($1, $2, $3) RETURNING *`;
  pool.query(QUERY_STRING, values, (err, data) => {
    if (err) {
      console.warn(err, "is the error");
    } else {
      console.log(data.rows);
    }
  });
  next();
};

// read all tasks
taskController.getTask = (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const QUERY_STRING = `SELECT * FROM tasks`;
  pool.query(QUERY_STRING, (err, data) => {
    if (err) {
      console.warn(err, "error reading from database");
    } else {
      console.log(data.rows);
      res.send(data.rows);
    }
  });
};

//edit task
taskController.updatetask = (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const requestId = req.params.id;
  const { title, description, deadline } = req.body;
  const QUERY_STRING = `UPDATE tasks 
  SET title = $1, description = $2, deadline = $3
  WHERE id = $4`;
  pool.query(
    QUERY_STRING,
    [title, description, deadline, requestId],
    (err, data) => {
      if (err) {
        console.warn(err, "error updating tasks");
      } else {
        res.status(200);
      }
    }
  );
  next();
};

// delete tasks
taskController.deleteTask = (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const QUERY_STRING = `DELETE FROM tasks WHERE id = ${req.body.id}`;
  pool.query(QUERY_STRING, (err, data) => {
    if (err) {
      console.warn(err, "error deleting from database");
    } else {
      res.status(200);
    }
  });
  next();
};

module.exports = taskController;
