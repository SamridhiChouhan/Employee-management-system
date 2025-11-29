import React from "react";
import NewTask from "./NewTask";
import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="h-[55%] flex items-center justify-start gap-5 flex-nowrap w-full py-5 px-2 mt-10 overflow-x-auto "
    >
      {data.tasks.map((task, idx) => {
        if (task.active) {
          return <AcceptTask key={idx} />;
        }
        if (task.newTask) {
          return <NewTask key={idx} />;
        }
        if (task.completed) {
          return <CompleteTask key={idx} />;
        }
        if (task.failed) {
          return <FailedTask key={idx} />;
        }
      })}
    </div>
  );
};

export default TaskList;
