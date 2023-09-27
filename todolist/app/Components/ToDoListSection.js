"use client";
import React, { useState } from "react";
const ToDoListSection = () => {
  const [task, setTask] = useState("");
  const [desc, setDesc] = useState("");
  //creating useState array to store task and desc values
  const [storeTask, setStoreTask] = useState([]);

  const submitHandler = (e) => {
    //after submitting form this prevents the default browser reload
    e.preventDefault();
    setStoreTask([...storeTask, { task, desc }]);
    //Making task,desc fields empty
    setTask("");
    setDesc("");
  };
  const removeTask=(index)=>{
    let copyTask=[...storeTask];

    copyTask.splice(index,1);
    console.log(storeTask)
    console.log(copyTask)
    setStoreTask(copyTask)

  
  }
  const completeTask=(index,e)=>{
  e.target.parentElement.parentElement.firstElementChild.style.color="green";
  }
  let displayTask = <li>No Tasks Available......</li>;
  //rendering each task and description properties of object on screen
  if(storeTask.length>0){
    displayTask = storeTask.map((item, index) => {
        return (
          <li key={index}>
            <div className="tasks">
            <h3><span className="complete-mark">✔</span>{item.task}</h3> 
            <h3>{item.desc}</h3>
            </div>
            <div className="controls">
            <i className="ri-delete-bin-line" onClick={()=>removeTask(index)}></i>
            <button onClick={(e)=>completeTask(index,e)}>completed</button>
            </div>
         
          </li>
        );
      });

  }

  return (
    <div className="section1">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          required
          placeholder="Enter Task..."
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter Description..."
          value={desc}
          required
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        <button className="btn-form">Add Task</button>
      </form>
      <hr />
      <div className="displayTask">
        <ul>{displayTask}</ul>
      </div>
    </div>
  );
};

export default ToDoListSection;
