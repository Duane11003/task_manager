const express = require("express");
const app = express();
const cors = require("cors");
const TaskController = require("./controllers/TaskController");

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.post("/addtask", TaskController.addTask, TaskController.getTask);
app.delete("/deletetask", TaskController.deleteTask, TaskController.getTask);
app.put("/:id", TaskController.updatetask, TaskController.getTask);
app.get("/", TaskController.getTask);

app.listen(3000, function () {
  console.log("listening on port 3000");
});
