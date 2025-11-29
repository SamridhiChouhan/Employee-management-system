import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
// import { AuthContext } from "../context/AuthProvider.jsx";

const AllTask = () => {
  const authData = useContext(AuthContext);
  console.log(authData.employees);
  return (
    <div className="bg-[#1c1c1c] p-5 rounded h-60 mt-5 overflow-auto">
      <div className=" bg-red-400 mb-5 py-2 p-4 flex justify-between rounded">
        <h2 className="w-1/5">Employee Name</h2>
        {/* <h3 className="w-1/5">Title</h3> */}
        <h5 className="w-1/5">New Task</h5>
        <h5 className="w-1/5">Active Task</h5>
        <h5 className="w-1/5">Completed </h5>
        <h5 className="w-1/5">Failed</h5>
      </div>
      {authData.employees.map((employee) => {
        return (
          <div className="border-emerald-400 border-2 mb-2 py-2 p-4 flex justify-between rounded ">
            <h2 className="w-1/5 text-lg font-med ">{employee.firstname}</h2>
            {/* <h3 className="w-1/5">tasks</h3> */}
            <h5 className="w-1/5 text-lg font-med  text-blue-400">
              {employee.taskCount.newTask}
            </h5>
            <h5 className="w-1/5 text-lg font-med text-yellow-400">
              {employee.taskCount.active}
            </h5>
            <h5 className="w-1/5 text-lg font-med text-green-400">
              {employee.taskCount.completed}
            </h5>
            <h5 className="w-1/5 text-lg font-med text-red-400">
              {employee.taskCount.failed}
            </h5>
          </div>
        );
      })}
    </div>
  );
};

export default AllTask;
