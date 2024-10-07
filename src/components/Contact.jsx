import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div className='h-screen w-screen'>
      <nav className='flex justify-between items-center p-[3%]'>
        <h1 className='text-zinc-400 text-3xl font-semibold'>Contact</h1>
        <Link to="/" className='flex justify-center items-center px-[1.5%] py-[0.8%] duration-300 hover:text-white text-xl hover:bg-[#6556CD] rounded bg-[#fff] text-black'>
            Home
        </Link>
      </nav>
      <div className='text-white px-[3%]'>
        <h1 className='text-3xl mb-4'>For any query: </h1>
        <h2 className='text-2xl'><i className="text-[#6556CD] mr-2 ri-phone-fill"></i> +91-9876543210</h2>
        <h2 className='text-2xl'><i className="text-[#6556CD] mr-2 ri-mail-fill"></i> dbpmovies@gmail.com</h2>
        <h2 className='text-3xl'><i className="hover:text-[#6556CD] mr-2 ri-facebook-box-fill"></i><i className="hover:text-[#6556CD] mr-2  ri-instagram-fill"></i><i class="hover:text-[#6556CD] mr-2 ri-twitter-x-fill"></i></h2>
      </div>
    </div>
  )
}

export default Contact
