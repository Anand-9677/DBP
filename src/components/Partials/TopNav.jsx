import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "../../utils/Axios"
import NoImage from "/NoImage.jpg"

function TopNav() {
    const [query, setquery] = useState("");
    const [searches, setSearches] = useState([]);

    const GetSearches = async () =>{
        try {
            const {data} = await axios.get(`/search/multi?query=${query}`);

            setSearches(data.results);
            
        } catch (error) {
            console.log("Error: ", error);
            
        }
    };

    useEffect(()=>{
        GetSearches();
    }, [query]);
    

  return (
    <div className='w-full h-[10vh] relative flex justify-start items-center ml-[20%]'>
        <i className="text-zinc-400 text-3xl ri-search-line"></i>
        <input
            onChange={(e)=> setquery(e.target.value)}
            value={query}
            className='w-[50%] text-zinc-200 mx-5 text-xl outline-none border-none bg-transparent' 
            type="text"
            placeholder='search anything'
         />

         {query.length > 0 && <i
         onClick={()=>setquery("")}
         className="text-zinc-400 text-3xl ri-close-fill"></i>}
         
         <div className='z-[100] absolute w-[50%] max-h-[50vh] bg-[#181819] top-[100%] overflow-auto rounded'>
            {searches.map((s, i)=>(<Link key={i} className='hover:text-black hover:bg-zinc-700 duration-300 font-semibold text-zinc-600 w-[100%] p-10 flex justify-start items-center border-b-2 border-zinc-100'>
                <img
                    className='w-[10vh] h-[10vh] object-cover rounded mr-10' 
                    src={s.backdrop_path || s.profile_path ? `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path}` : NoImage} alt=""
                />
                <span className='text-white'>{s.name || s.original_name || s.title || s.original_title}</span>
            </Link> ))}
         </div>
    </div>
  )
}

export default TopNav
