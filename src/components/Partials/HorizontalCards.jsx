import React from 'react'
import Dropdown from './Dropdown'


//Trending Line
function HorizontalCards({data}) {
  return (
    <div className='w-full flex gap-1 overflow-x-auto'>

        {data.map((d, i)=> (
            <div key={i} className='min-w-[20%] h-content ml-5 mb-5 bg-zinc-900 rounded p-2'>
                <img className='h-cover w-full bg-center overflow-hidden' src={`https://image.tmdb.org/t/p/original/${d.backdrop_path || d.profile_path}`} alt="" />
                <div className='text-white'>
                <h1 className='text-lg font-semibold mt-2'>{d.title || d.name || d.original_name || d.original_title}</h1>
                <p>
                    Popularity: {d.popularity}
                    <br />
                    Language: {d.original_language.toUpperCase()}
                    <br />
                    Media Type: {d.media_type.toUpperCase()}
                </p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default HorizontalCards
