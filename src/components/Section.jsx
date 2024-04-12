import React from 'react'
import { useSelector } from 'react-redux'
import { getData } from '../Redux/boardSlice'
import Tasks from './Tasks'

const Section = () => {
  const showData =  useSelector(getData)
  const Active = showData.find((ele)=>{
    if(ele.isActive === true){
      return ele
    }
  })
  return <div className=' min-h-screen md:ml-[220px] flex w-full md:px-5 overflow-x-auto'
   style={{
    backgroundImage: "linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)"
   }}>
     <div className='p-5 '>
      <div className='flex mb-10 gap-5'>
      {Active?.columns?.map((ele,ind)=>(
        <div key={ind} className='w-[270px] '>
          <p>
            {ele.name}
            <span className='text-teal-500 ml-1'>({ele.tasks.length})</span>
          </p>
        </div>
      ))}
 
      </div>
      <div className='flex gap-5 '>
      {Active?.columns.map((ele,ind)=>(
        <div key={ind} className='w-[270px] '>
           <Tasks ele={ele} Ind={ind}  />
        </div>
      ))}
      </div>
    </div> 
  </div>
}

export default Section