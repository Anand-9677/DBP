import React from 'react'
import { Link } from 'react-router-dom'
import DBP from '/DBP.jpg'

function AboutUs() {
  return (
    <div className='h-screen w-screen'>
      <nav className='flex justify-between items-center p-[3%]'>
        <h1 className='text-zinc-400 text-3xl font-semibold'>About Us</h1>
        <Link to="/" className='flex justify-center items-center px-[1.5%] py-[0.8%] duration-300 hover:text-white text-xl hover:bg-[#6556CD] rounded bg-[#fff] text-black'>
            Home
        </Link>
      </nav>
      <div className='w-full flex justify-center items-center px-[3%] py-[2%] gap-[5%]'>
        <p className=' w-[65%] text-white text-xl'>Welcome to DBP, your ultimate destination for an unparalleled movie experience. Whether you're a passionate cinephile or just looking for a fun movie night, we offer a vast selection of films across every genre. From timeless classics to the latest blockbusters, our mission is to provide you with easy access to movies you love.

        At DBP, we believe that movies have the power to inspire, entertain, and bring people together. Our team of dedicated movie enthusiasts works tirelessly to curate a diverse collection, ensuring there's something for everyone.
        <br />
        Our journey began with a simple idea: to make movie shopping a delightful and hassle-free experience. Today, we’re proud to serve movie lovers all around the world, delivering quality entertainment at your fingertips.
        <br />
        Thank you for choosing DBP. We look forward to being part of your movie journey!
        <br />
        Happy watching!
        </p>
        <img className='w-[28%] border-2 border-zinc-400 rounded' src={DBP} alt="" />
      </div>
      <footer>
        <p className='text-center text-md text-gray-400'>�� 2024 DBP. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default AboutUs
