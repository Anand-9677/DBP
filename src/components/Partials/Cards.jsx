import React from 'react'
import { Link } from 'react-router-dom'

function Cards({data}) {
  return (
    <div className='w-full h-full flex flex-wrap mt-8'>
      {data.map((c, i) => (
        <Link className=' relative w-[35vh] mr-[2%] mb-[5%]' key={i}>
            <img className='shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)]' src={`https://image.tmdb.org/t/p/original/${c.poster_path || c.backdrop_path || c.profile_path}`} alt="" />
            <h1 className='text-2xl text-zinc-200 mt-3 font-semibold'>{c.name || c.title || c.original_name || c.original_title}</h1>
            {c.vote_average && (<div className='absolute right-[-8%] bottom-[25%] rounded-full font-semibold bg-[#6556CD] text-xl text-white w-[7vh] h-[7vh] flex justify-center items-center'>
              {(c.vote_average * 10).toFixed()} <sup>%</sup>
            </div>)}
        </Link>
      ))}
    </div>
  )
}

export default Cards