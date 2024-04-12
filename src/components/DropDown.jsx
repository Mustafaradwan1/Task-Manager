import React, { useState } from 'react'
import  { changeHeaderName, getData } from '../Redux/boardSlice'
import { useDispatch, useSelector } from 'react-redux'
import boardImg from "../assets/icon-board.svg"
import AddModel from '../Model/AddModel'
const DropDown = ({setActive,openModel, setOpenModel}) => {
    const dispatch = useDispatch()
    const Data = useSelector(getData)
    const [IsActive, setIsActive] = useState("Platform Launch")
    return <>
    <div className='flex px-3 shadow-md justify-center md:hidden w-full h-screen bg-[rgba(0, 0, 0, 0.297);] absolute z-20' onClick={(e)=>{
      if(e.target !== e.currentTarget) return
      setActive(false)
    }}>
        <div className='w-full h-[50vh] py-10 pr-8 bg-gray-50 rounded-md'>
        <h2 className='mb-5 px-5'>All Broads ({Data.length})</h2>
        {Data.map((ele,ind)=>(
        <div key={ind} className={`${IsActive === ele.name ? "bg-blue-500 text-white " : ""} flex cursor-pointer gap-1 items-center mb-2 rounded-r-full px-4 py-[10px] `} onClick={()=>{
          setIsActive(ele.name)
          dispatch(changeHeaderName(ele.name))
        }}>
          <img src={boardImg} alt={ele.name} />
          <p>{ele.name}</p>
        </div>
      ))}
      <div className='flex items-center gap-1 px-4' onClick={()=>{
          setOpenModel(true)
          
        }}>
        <img src={boardImg} alt="create"/>
        <p className='text-blue-600 cursor-pointer'  >Create New Board</p>
      </div>
        </div>
    </div>
    {openModel && <AddModel setOpenModel={setOpenModel} />}
    </>
}

export default DropDown