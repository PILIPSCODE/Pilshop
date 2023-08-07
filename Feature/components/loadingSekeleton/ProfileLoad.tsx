import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const ProfileLoad = () => {
    return (
      <>
        <div
        className="grid grid-cols-2 p-2 rounded-2xl mt-2 max-[1078px]:grid-cols-1   w-11/12"
        data-theme="wireframe"
      >
    
        <div className="flex items-center  justify-around max-sm:flex-col">
          <div className=" w-40 h-40 flex justify-center items-center">
            <Skeleton
             highlightColor='#202020' width={112} height={112} borderRadius={50} className=" border-2 bg-green-300"
            />
           
          </div>
          <div className="break-words flex-grow w-min max-sm:w-11/12 ">
            <div className="flex items-center gap-2 max-sm:justify-center ">
              <h1 className="font-bold text-2xl"><Skeleton width={200} className='bg-green-300' highlightColor='#202020'/></h1>
            
            </div>
            <p className="max-sm:text-center">
            <Skeleton count={2} width={500} className='bg-green-300' highlightColor='#202020'/>
            <Skeleton  width={100} className='bg-green-300' highlightColor='#202020'/>

            </p>
          </div>
        </div>
        <div className="flex items-center justify-center max-md:flex-col">
        <Skeleton  width={300} height={80} className='bg-green-300' highlightColor='#202020'/>
        </div>
      </div>
      <div className="w-11/12 flex justify-around  mt-2 p-2 rounded-2xl h-16 items-center "data-theme="wireframe">
        <Skeleton  width={40} height={40} className='bg-green-300 flex-grow' highlightColor='#202020'/>
        <Skeleton  width={40} height={40} className='bg-green-300 flex-grow' highlightColor='#202020'/>
        <Skeleton  width={40} height={40} className='bg-green-300 flex-grow' highlightColor='#202020'/>
      </div>
      
     <div className='w-11/12 mt-2 flex justify-around ' data-theme="wireframe">

   
     
      <Skeleton  style={{width:"100%"}} height={500} className='bg-green-300 flex-grow' highlightColor='#202020'/>
     </div>
      </>
      )
}

export default ProfileLoad

