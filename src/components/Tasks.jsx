import React, { useState } from 'react'
import TaskDetails from '../Model/TaskDetails'
import { useDispatch, useSelector } from "react-redux";
import { dragTask } from '../Redux/boardSlice';

const Tasks = ({ele,Ind}) => {
  const [details, setDetails] = useState(null)
  const [active, setActive] = useState(false)
  const dispatch = useDispatch();

  const handleDragStart = (e, text) => {
    e.dataTransfer.setData("text",  JSON.stringify({ text, Colind:Ind }));
};
const handleDrop = (e) => {
  e.preventDefault();
  const { Colind , text } = JSON.parse(
    e.dataTransfer.getData("text")
  );
  if (Ind !== Colind) {
    dispatch(
      dragTask({ Ind, Colind, text })
    );
  }
  
};
  const handleDragOver = (e) => {
    e.preventDefault();
   
  };
  return <>
    <div className=' h-full'
    onDragOver={handleDragOver} onDrop={(e) => handleDrop(e)}
    >
        {ele?.tasks.map((task,ind)=>(
            <div className='py-5 px-3 shadow rounded-md cursor-pointer mb-5' draggable onDragStart={(e) => handleDragStart(e, ind)}
             onClick={()=>{
              setDetails(task)
              setActive(true)
            }}  key={ind}>
                <h2>{task.title}</h2>
                {/* you have {task.subtasks.length} tasks */}
            </div> 
        ))}
        {active && <TaskDetails details={details} setActive={setActive} /> }
    </div>
  </>
}
export default Tasks