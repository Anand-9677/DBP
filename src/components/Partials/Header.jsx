import React from 'react'
import { Link } from 'react-router-dom';


function Header({data}) {
    // console.log(data);
    
  return (
    <div 
    style={{background: `linear-gradient(rgba(0,0,0,1.4), rgba(0,0,0,0.2), rgba(0,0,0,0.8)), url(https://image.tmdb.org/t/p/original/${data.backdrop_path || data.poster_path})`, backgroundPosition: "center", backgroundSize: "cover"}}
    className='w-full h-[70vh] flex flex-col justify-end items-start pl-[2%] pb-[3%]'>
        <h1 className='w-[50%] text-4xl font-black text-white'>{data.name || data.original_name || data.title || data.original_title}</h1>
        <p className='text-white text-md'>
        {data.release_date ? (
            <>
                <i className="ri-megaphone-fill"></i> {data.release_date}
                <br />
            </>
        ) : null}
        <i className="ri-movie-2-fill"></i>{" "}{data.media_type.toUpperCase()}
        </p>
        <Link className='bg-[#6556CD] p-3 text-white rounded font-semibold mt-2'>Watch Trailer</Link>
    </div>
  )
}

export default Header