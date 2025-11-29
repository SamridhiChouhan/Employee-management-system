import React from "react";

const TaskListNumbers = ({ data }) => {
  console.log(data);
  return (
    <div className="flex mt-5 justify-between gap-5 screen">
      <div className="rounded-xl w-[45%] px-6 py-9  bg-red-400 ">
        <h2 className="text-2xl font-semibold">{data.taskCount.active}</h2>
        <h3 className="text-xl font-medium">Active</h3>
      </div>
      <div className="rounded-xl w-[45%] px-6 py-9  bg-blue-400 ">
        <h2 className="text-2xl font-semibold">{data.taskCount.newTask}</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="rounded-xl w-[45%] px-6 py-9  bg-green-400 ">
        <h2 className="text-2xl font-semibold">{data.taskCount.completed}</h2>
        <h3 className="text-xl font-medium">Completed</h3>
      </div>
      <div className="rounded-xl w-[45%] px-6 py-9  bg-yellow-400 ">
        <h2 className="text-2xl font-semibold">{data.taskCount.failed}</h2>
        <h3 className="text-xl font-medium">Failed</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;
