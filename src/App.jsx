import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import TaskBoard from "mfe_tasks/TaskBoard";
import AddTask from "mfe_tasks/AddTask";

const usersTasks = [
  { id: "random_id", content: "Finish UI design", status: "created" },
  { id: "random_id2", content: "Get server side done.", status: "created" },
  { id: "random_id3", content: "Update Auth Service.", status: "created" },
  { id: "random_id4", content: "Fix UI Bug.", status: "inProgress" },
  { id: "random_id5", content: "Adding Google maps.", status: "inProgress" },
  { id: "random_id6", content: "Adding another MFE", status: "inProgress" },
  {
    id: "random_id7",
    content: "Fix Tailwind custom values",
    status: "inTest",
  },
  { id: "random_id8", content: "Build api routes", status: "inTest" },
  { id: "random_id9", content: "Adding Drag and Drop", status: "inTest" },
  { id: "random_id10", content: "Minimize packages", status: "closed" },
  { id: "random_id11", content: "Adding Search field", status: "closed" },
  { id: "random_id12", content: "Adding tests", status: "closed" },
];

const App = () => {
  const [tasks, setTasks] = useState(usersTasks);
  return (
    <div className="mt-10 text-3xl grid mx-auto max-w-7xl">
      {/* Auth */}
      <div className="bg-darkBlue w-52 flex gap-x-2">
        <img
          width={35}
          src="data:image/jpeg;base64,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"
        />
        <div className="text-white">Hello Name</div>
      </div>

      <div className="w-full mt-10 bg-darkBlue py-10 grid gap-y-5">
        <AddTask setTasks={setTasks} />
        {tasks && <TaskBoard tasks={tasks} />}
      </div>
    </div>
  );
};

const root = createRoot(document.getElementById("app"));
root.render(<App />);
