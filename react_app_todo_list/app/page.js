"use client";
import React, { useState } from "react";

const page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [data, setData] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setData([...data, { title, desc }]);
    setTitle("");
    setDesc("");
    console.log(data);
  };
  let renderedData = (
    <h2 className="font-bold text-center text">No Task Available</h2>
  );

  const deleteHandler = (i) => {
    let copyTask = [...data];
    copyTask.splice(i,1);
    setData(copyTask)
  };
  if (data.length > 0) {
    renderedData = data.map((e, i) => {
      return (
        <li key={i} className="flex items-center justify-between mb-5">
          <div className="flex items-center justify-between w-2/3">
            <h3 className="text-2xl font-semibold">{e.title}</h3>
            <p className="text-xl">{e.desc}</p>
          </div>
          <button
            onClick={() => {
              deleteHandler(i)
            }}
            className="bg-red-400 text-white rounded font-bold px-4 py-2"
          >
            Delete
          </button>
        </li>
      );
    });
  }
  return (
    <>
      <h1 className="bg-black text-white text-center font-bold text-4xl p-7">
        My ToDo List
      </h1>

      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="text-xl border-zinc-800 border-2 m-8 px-4 py-2"
          placeholder="Enter Task Here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className="text-xl border-zinc-800 border-2 m-8 px-4 py-2"
          placeholder="Enter Discription Here"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />

        <button className="bg-black text-white text-2xl px-4 py-2 font-bold rounded m-5">
          Add Task
        </button>
      </form>
      <hr />
      <div className="p-4 bg-slate-300">
        <ul>{renderedData}</ul>
      </div>
    </>
  );
};

export default page;
