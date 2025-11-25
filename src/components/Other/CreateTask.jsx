import React from "react";

const CreateTask = () => {
  return (
    <div className="mt-10">
      <form className="flex flex-wrap items-start justify-between bg-[#1c1c1c] py-3">
        <div className="w-3/5">
          <div className="w-full px-5">
            <h3>Task Title</h3>
            <input
              className="w-full mb-5 bg-[#1c1c1c] border-[1px] border-gray-400 rounded p-1 "
              type="text"
              placeholder="Make a ui design."
            />
          </div>
          <div className="w-full px-5">
            <h3>Date</h3>
            <input
              className="w-full mb-5 bg-[#1c1c1c] border-[1px] border-gray-400 rounded p-1 "
              type="date"
            />
          </div>
          <div className="w-full px-5">
            <h3>Assign to:</h3>
            <input
              className="w-full mb-5 bg-[#1c1c1c] border-[1px] border-gray-400 rounded p-1 "
              type="text"
              placeholder="Enter employee name"
            />
          </div>
          <div className="w-full px-5">
            <h3>Category</h3>
            <input
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
