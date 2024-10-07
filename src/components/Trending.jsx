import React, { useEffect, useState } from 'react'
import {Link, useNavigate } from 'react-router-dom'
import TopNav from './Partials/TopNav';
import Dropdown from './Partials/Dropdown';
import Axios from '../utils/Axios';
import Loading from './Loading';
import Cards from './Partials/Cards';
import InfiniteScroll from 'react-infinite-scroll-component';

function Trending() {
    const navigate = useNavigate();
    const [category, setCategory] = useState("all");
    const [duration, setDuration] = useState("day");
    const [trending, setTrending] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, sethasMore] = useState(true);
    document.title = "DBP | Trending";

    const GetTrending = async () => {
        try {
            const {data} = await Axios.get(`/trending/${category}/${duration}?page=${page}`);
            if(data.results.length > 0) {
                setTrending((prevState) => [...prevState, ...data.results]);
                setPage(page+1);
            }
            else{
                sethasMore(false);
            }
        } catch (error) {
            console.log("Error: ", error);
        }
    }

    const refreshHandler = async() => {
        if(trending.length === 0){
            GetTrending();
        }
        else{
            setPage(1);
            setTrending([]);
            GetTrending();
        }
    }
    

    useEffect(() => {
        refreshHandler();
    }, [category, duration])

  return trending.length > 0 ? (
    <div className='w-screen h-full p-[3%]'>
      <div className='w-full h-[10vh flex items-center'>
        <Link onClick={() => navigate(-1)}><i className="ri-arrow-left-line text-[#6565CD] font-bold text-2xl mr-3"></i></Link>
        <h1 className='text-3xl text-zinc-400 font-semibold'>Trending</h1>
        <TopNav />
        <Dropdown title="Category" options={["movie", "tv", "all"]} func={(e) => setCategory(e.target.value)} />
        <div className='w-[4%]'></div>
        <Dropdown title="Duration" options={["week", "day"]} func={(e) => setDuration(e.target.value)} />
      </div>

        <InfiniteScroll
        dataLength={trending.length}
        next={GetTrending}
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}
        >
            <Cards data={trending} />            
        </InfiniteScroll>

    </div>
  ) : (<Loading />)
}

export default Trending
