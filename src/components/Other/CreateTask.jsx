import React, { useState, useContext } from "react";
import NewTask from "../TaskList/NewTask";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [assignto, setAssignto] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  function submitHandler(e) {
    // console.log()
    e.preventDefault();

    const newTask = {
      title,
      date,
      category,
      description,
      newTask: true,
      active: false,
      failed: false,
      completed: false,
    };

    setTitle("");
    setDate("");
    setAssignto("");
    setCategory("");
    setDescription("");

    const data = userData;

    data.forEach((employee) => {
      if (assignto == employee.firstname) {
        // console.log(employee);
        employee.tasks.push(newTask);
        employee.taskCount.newTask = employee.taskCount.newTask + 1;
        console.log(employee);
        // employee.tasks.save();
      }
    });

    setUserData(data);

    console.log(data);
    // localStorage.setItem("employees", JSON.stringify(data));
  }

  return (
    <div className="mt-10">
      <form
        className="flex flex-wrap items-start justify-between bg-[#1c1c1c] py-3"
        onSubmit={submitHandler}
      >
        <div className="w-3/5">
          <div className="w-full px-5">
            <h3>Task Title</h3>
            <input
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              className="w-full mb-5 bg-[#1c1c1c] border-[1px] border-gray-400 rounded p-1 "
              type="text"
              placeholder="Make a ui design."
            />
          </div>
          <div className="w-full px-5">
            <h3>Date</h3>
            <input
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
              className="w-full mb-5 bg-[#1c1c1c] border-[1px] border-gray-400 rounded p-1 "
              type="date"
            />
          </div>
          <div className="w-full px-5">
            <h3>Assign to:</h3>
            <input
              value={assignto}
              onChange={(e) => {
                setAssignto(e.target.value);
              }}
              className="w-full mb-5 bg-[#1c1c1c] border-[1px] border-gray-400 rounded p-1 "
              type="text"
              placeholder="Enter employee name"
            />
          </div>
          <div className="w-full px-5">
            <h3>Category</h3>
            <input
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              className="w-full mb-6 bg-[#1c1c1c] border-[1px] border-gray-400 rounded p-1 "
              type="text"
              placeholder="design, dev, etc."
            />
          </div>
        </div>
        <div className="w-2/5 flex flex-col items-start pe-5">
          <div className="w-full">
            <h3>Description</h3>
            <textarea
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              className="w-full h-52  bg-[#1c1c1c] border-[1px] border-gray-400 rounded p-2"
              name=""
              id=""
              placeholder="Add description"
              // col="10"
            ></textarea>
          </div>
          <button
            className="bg-green-400 w-full py-2 rounded font-semibold text-lg mt-5"
            type="submit"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
