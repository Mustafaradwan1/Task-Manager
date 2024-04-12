import React, { useState } from 'react'
import  { changeHeaderName, getData } from '../Redux/boardSlice'
import { useDispatch, useSelector } from 'react-redux'
import boardImg from "../assets/icon-board.svg"
import AddModel from '../Model/AddModel'
const Sidebar = ({setOpenModel,openModel}) => {
  const dispatch = useDispatch()
  const Data = useSelector(getData)
  const [IsActive, setIsActive] = useState("Platform Launch")
  return <>
  <div 
  style={{
    backgroundImage:" linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%)"
  }}
  className='hidden md:block md:w-[230px] min-h-screen fixed left-0 right-0 py-10 pr-4 shadow-md'>
    <h2 
    className='mb-5 px-5 font-bold text-xl textBg'>All Broads ({Data.length})</h2>
    {Data.map((ele,ind)=>(
      <div key={ind} className={`${IsActive === ele.name ? "bg-blue-600 text-white " : ""} flex cursor-pointer gap-1 items-center mb-2 rounded-r-full px-4 py-[10px] `} onClick={()=>{
        setIsActive(ele.name)
        dispatch(changeHeaderName(ele.name))
      }}>
        <img src={boardImg} alt={ele.name} />
        <p>{ele.name}</p>
      </div>
    ))}
    <div className='flex items-center gap-1 px-4'>
      <img src={boardImg} alt="create"/>
      <p className='text-blue-600 cursor-pointer' onClick={()=>{
        setOpenModel(true)
      }}>Create New Board</p>
    </div>
  </div>
  {openModel && <AddModel setOpenModel={setOpenModel} />}
  </>
}
export default Sidebar