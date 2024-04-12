import React from 'react'

const TaskDetails = ({details,setActive}) => {
  let a = 15
  return <>
  <div className='w-full h-full fixed top-0 bg-[#00000096] z-50 left-0 right-0 flex items-center justify-center' 
  onClick={(e)=>{
    if(e.target !== e.currentTarget) return
    setActive(false)
  }}
  >
    <div className='bg-white w-[90%]  md:w-[75%] lg:w-[55%]  min-h-1/2 rounded-md p-5'>
        <h2 className='font-bold mb-4 text-lg'>{details.title}</h2>
        <p className='mb-2'>{details.description}</p>
        {details.subtasks.map((ele,ind)=>(
            <div key={ind}  className='flex gap-3 items-center mb-3 cursor-pointer text-gray-400 hover:text-gray-800 transition'>
              {ele.title}
              {ele.isCompleted ? 

<div className="checkbox-wrapper-15 text-center">
  <input className="inp-cbx hidden" id={`cbx${ind}`} type="checkbox" checked />
  <label className="cbx" htmlFor={`cbx${ind}`}>
    <span>
      <svg width="12px" height="9px" viewBox="0 0 12 9">
        <polyline points="1 5 4 8 11 1"></polyline>
      </svg>
    </span>
    <span>To-do</span>
  </label>
</div>
: 

<div className="checkbox-wrapper-15">
  <input className="inp-cbx hidden" id={`cbx${ind}`} type="checkbox"  />
  <label className="cbx" htmlFor={`cbx${ind}`}>
    <span>
      <svg width="12px" height="9px" viewBox="0 0 12 9">
        <polyline points="1 5 4 8 11 1"></polyline>
      </svg>
    </span>
    <span>To-do</span>
  </label>
</div>

            }

    </div>
        ))}
    </div>
  </div>
  </>
  
}

export default TaskDetails













