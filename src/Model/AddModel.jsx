import React, { useState } from 'react'
import cross from "../assets/icon-cross.svg"
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from 'react-redux';
import { AddToData } from '../Redux/boardSlice';
const AddModel = ({setOpenModel}) => {
  const dispatch = useDispatch()
  const [name, setname] = useState("")
  const [newInput, setNewInput] = useState([
    {name:"todo",tasks:[],id:uuidv4()},
    {name:"doing",tasks:[],id:uuidv4()},
  ])
  const Change = (id,newData)=>{
    setNewInput((item)=>{
      const ele = [...item]
      const cha = ele.find((col)=> col.id === id )
      cha.name = newData
      return ele
    })
  }
  const remove = (id)=>{
    setNewInput((item)=>item.filter((ele)=> ele.id !== id))
  }
  const Submit = (name,newInput)=>{
    setOpenModel(false)

    dispatch(AddToData({name,newInput}))
  }
 
  return (
    <div className='fixed z-50 h-screen bg-[#00000988] w-full flex justify-center items-center'  onClick={(e)=>{
      if(e.target !== e.currentTarget)return
      setOpenModel(false)
    }}>
        <div className='bg-white p-5 rounded-md w-[90%] sm:w-96'>
            <div className='mb-5 '>
              <input type='text' value={name} onChange={(e)=>setname(e.target.value)} placeholder='e.y.Task name' className='border border-gray-200 py-2 px-4 rounded-md w-full' />
            </div>
            <div>
              {newInput.map((column,ind)=>(
                <div className='flex items-center gap-2 mb-2' key={ind}>
                    <input type='text' value={column.name} onChange={(e) => { Change(column.id, e.target.value);}}  placeholder='e.y.Task name' className='border border-gray-200 py-2 px-4 rounded-md w-full' />
                    <img src={cross} alt='' className='w-4 h-4 cursor-pointer' onClick={()=>remove(column.id)} />
                </div>
              ))}
              <p className='rounded-full px-5 py-2 bg-blue-500 mt-5 text-gray-100 cursor-pointer' onClick={()=>setNewInput([
                ...newInput,
                {name:"",tasks:[],isActive:false,id:uuidv4()},
              ])}>+ add a new column </p>
              <button type='submit' className='rounded-full px-5 py-2 bg-blue-500 mt-5 text-gray-100 cursor-pointer' onClick={()=>Submit(name,newInput)}>create now</button>
              
            </div>
        </div>
            
    </div>
  )
}

export default AddModel