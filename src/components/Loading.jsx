import React from 'react'
import loader from "/Loader.gif"
function Loading() {
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-[#130724]'>
      <img className='w-[50%]' src={loader} alt="" />
    </div>
  )
}

export default Loading