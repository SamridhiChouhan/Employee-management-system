import React from "react";

const AcceptTask = () => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] bg-red-400 rounded-xl p-5">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 px-3 py-1 rounded text-sm">High</h3>
        <h4 className="text-sm">20 feb 2024</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">Make a project</h2>
      <p className="text-sm mt-2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa veniam
        optio quisquam, soluta excepturi reprehenderit?
      </p>

      <div className="flex justify-between w-full mt-5">
        <button className="w-full text-sm bg-green-500 text-white py-2 mx-1 rounded-md ">
          Done
        </button>
        <button className="w-full text-sm bg-red-500 text-white py-2 mx-1 rounded-md">
          Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
