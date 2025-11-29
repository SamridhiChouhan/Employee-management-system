import React from "react";
import Header from "../Other/Header";
import TaskListNumbers from "../Other/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({ data }) => {
  return (
    <div className="p-20 bg-[#1C1C1C] h-screen">
      {/* <h1>{data.id}</h1> */}
      <Header data={data} />
      <TaskListNumbers data={data} />
      <TaskList data={data} />
    </div>
  );
};

export default EmployeeDashboard;
