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
      {data.tasks.map((task) => {
        if (task.active) {
          return <AcceptTask />;
        }
        if (task.newTask) {
          return <NewTask />;
        }
        if (task.completed) {
          return <CompleteTask />;
        }
        if (task.failed) {
          return <FailedTask />;
        }
      })}
    </div>
  );
};

export default TaskList;
