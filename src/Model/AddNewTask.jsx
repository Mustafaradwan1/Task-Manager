import React, { useState } from 'react'
import { v4 as uuidv4 } from "uuid";
import cross from "../assets/icon-cross.svg"
import { useDispatch, useSelector } from 'react-redux';
import { AddTask, getData } from '../Redux/boardSlice';
const AddNewTask = ({setAddTask,num =0}) => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const boardSlice = useSelector(getData)
    const findSlice = boardSlice.find((ele)=> ele.isActive)
    const columns = findSlice.columns
    const numIndex = columns.find((ele,ind)=> ind ===  num)
    const [states,setStates] = useState(numIndex.name)
    const [newNum, setnewNum] = useState(num)
    const dispatch = useDispatch()
    const [subtasks, setsubtasks] = useState([
        {name:"", isCompleted: false, id:uuidv4()},
        {name:"", isCompleted: false, id:uuidv4()},
    ])
    const Change = (id,val)=>{
        setsubtasks((item)=>{
            const newData = [...subtasks]
            const change = subtasks.find((ele)=>ele.id === id)
            change.name = val
            return newData
        })
    }
    const Delate = (id)=> {
        setsubtasks((ele)=> ele.filter((e)=> e.id !== id))
    }
    const OnChange = (e)=> {
        setStates(e.target.value)
        setnewNum(e.target.selectedIndex) 
    }
    const Submit = ()=> {
        dispatch(AddTask({
            title,
            description,
            subtasks,
            states,
            newNum
        }))
    }
  return <>
    <div className='fixed w-full h-full bg-[#00000046] flex justify-center items-center top-0 z-50' onClick={(e)=>{
        if(e.target !== e.currentTarget)return
        setAddTask(false)
    }}>
        <div className='w-[90%] sm:w-96 min-h-3/4 bg-white rounded-md py-8 px-5'>
            <h2 className='font-bold sm:text-lg text-[16px]'>Add New Task</h2>
            <div className='flex flex-col gap-1'>
                <label className='text-gray-500'>Task Name</label>
                <input type='text' placeholder='e.g take coffee break' value={title} className='border border-gray-300 py-1 px-4 rounded-sm outline-blue-300' onChange={(e)=>setTitle(e.target.value)} />
            </div>
            <div className='flex flex-col gap-2'>
                <label className='text-gray-500'>Description</label>
                <textarea placeholder='e.g take coffee break' value={description} className='border border-gray-300 py-1 px-4 rounded-sm outline-blue-300 h-32' onChange={(e)=>setDescription(e.target.value)} />
            </div>
            <div className='flex flex-col gap-2'>
                <label className='text-gray-500'>SubTasks</label>
                {subtasks.map((item,ind)=>(
                    <div key={ind} className='flex items-center gap-1'>
                        <input type='text' value={item.name} placeholder='e.g take coffee break' className='border border-gray-300 py-1 px-4 rounded-sm outline-blue-300 w-full'
                        onChange={(e)=>Change(item.id,e.target.value)}  />
                        <img src={cross} alt='remove' className='cursor-pointer text-xl' onClick={()=>Delate(item.id)} />
                    </div>
                ))}
                <p className='rounded-full py-2 px-5 text-center bg-blue-500 text-gray-100 cursor-pointer' onClick={()=>setsubtasks([
                    ...subtasks,
                    {name:"", task:[], isActive: false, id:uuidv4()},
                ])}>+ Add New subTask</p>
                <div>
                    <select className='w-full select text-gray-500' value={states} onChange={(e)=>OnChange(e)}>
                        {columns.map((ele,ind)=>(
                            <option key={ind} value={ele.name} className=''>{ele.name}</option>
                        ))}
                    </select>
                </div>
                <button type='submit' className='rounded-full py-2 px-5 text-center bg-blue-500 text-gray-100 cursor-pointer' onClick={()=>{
                    Submit()
                    setAddTask(false)
                }} >create task</button>
            </div>
        </div>
    </div>
        
    </>
  
}

export default AddNewTask