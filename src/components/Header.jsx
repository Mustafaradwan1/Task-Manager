import React, { useState } from 'react'
import logo from "../assets/logo-mobile.svg"
import menu from "../assets/icon-vertical-ellipsis.svg"
import { useSelector } from 'react-redux'
import { changeName } from '../Redux/boardSlice'
import up from '../assets/icon-chevron-up.svg'
import down from '../assets/icon-chevron-down.svg'
import DropDown from './DropDown'
import AddNewTask from '../Model/AddNewTask'
const Header = ({setOpenModel,openModel}) => {
  const HeaderName = useSelector(changeName)
  const [active, setActive] = useState(false)
  const [AddTask, setAddTask] = useState(false)
  return <>
  <div className='px-3 flex justify-between h-16 bg-white shadow fixed top-0 left-0 right-0'>
    <div className='flex gap-5 items-center'>
        <div className='flex items-center gap-2'>
            <img src={logo} alt='logo' />
            <p className='text-xl hidden md:block'>Task Manager</p>
        </div>
        <div className='flex items-center gap-1'>
            <p>{HeaderName}</p>
            <img src={active ? up : down} onClick={()=>{
              setActive(!active)
              setOpenModel(false)
            }
            } className='block md:hidden cursor-pointer w-4' alt='' />
        </div>
    </div>
    <div className='flex items-center gap-5'>
        <button className='bg-blue-500 text-gray-100 rounded-full px-5 py-2 hidden md:block' onClick={()=>setAddTask(true)}>+ Add New Task</button>
        <button className='bg-blue-500 text-gray-100 rounded-full h-10 w-10 block md:hidden text-xl' onClick={()=>setAddTask(true)}>+</button>
        <img src={menu} alt='menu' onClick={()=>setAddTask(true)} className='w-[5px] h-5 cursor-pointer'  />
    </div>
  </div>
  {active && <DropDown setActive={setActive} openModel={openModel} setOpenModel={setOpenModel} />}
  {AddTask && <AddNewTask setAddTask={setAddTask} />}
  </>
}

export default Header