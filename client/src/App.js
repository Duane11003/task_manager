import React from "react";
import ReactDOM from "react-dom";
import Tasks from "./Components/Tasks/Tasks";

function App() {
  return (
    <div>
      <Tasks />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
