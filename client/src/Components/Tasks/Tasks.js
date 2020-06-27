import React, { useState, useEffect } from "react";

function Tasks() {
  const [tasks, setTasks] = useState([]);
 
  console.log(tasks)

  return (
    <div>
      <p>From tasks component</p>
    </div>
  );
}

export default Tasks;
