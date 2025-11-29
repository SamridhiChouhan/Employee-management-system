import React from "react";

const CompleteTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 flex flex-col justify-between h-full w-[300px] bg-red-400 rounded-xl p-5">
      <div>
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 px-3 py-1 rounded text-sm">
            {data.category}
          </h3>
          <h4 className="text-sm">{data.date}</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">{data.title}</h2>
        <p className="text-sm mt-2">{data.description}</p>
      </div>
      <div className="w-full mt-5">
        <button className="w-full text-sm bg-green-500 text-white py-2 rounded-md">
          Completed
        </button>
      </div>
    </div>
  );
};

export default CompleteTask;
