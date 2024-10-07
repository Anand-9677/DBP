import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Axios from '../utils/Axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from './Loading';
import TopNav from './Partials/TopNav';
import Dropdown from './Partials/Dropdown';
import Cards from './Partials/Cards';

function TvShows() {
  const navigate = useNavigate();
    const [category, setCategory] = useState("airing_today");
    const [tv, setTV] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, sethasMore] = useState(true);
    document.title = "DBP | TV";

    const GetTV = async () => {
        try {
            const {data} = await Axios.get(`/tv/${category}?page=${page}`);
            console.log(data);
            
            if(data.results.length > 0) {
                setTV((prevState) => [...prevState, ...data.results]);
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
        if(tv.length === 0){
            GetTV();
        }
        else{
            setPage(1);
            setTV([]);
            GetTV();
        }
    }
    

    useEffect(() => {
        refreshHandler();
    }, [category])

    return tv.length > 0 ? (
        <div className='w-screen h-full p-[3%]'>
          <div className='w-full h-[10vh flex items-center'>
            <Link onClick={() => navigate(-1)}><i className="ri-arrow-left-line text-[#6565CD] font-bold text-2xl mr-3"></i></Link>
            <h1 className='text-3xl text-zinc-400 font-semibold'>TVShows</h1>
            <TopNav />
            <Dropdown title="Category" options={["airing_today", "on_the_air", "popular", "top_rated"]} func={(e) => setCategory(e.target.value)} />
            <div className='w-[4%]'></div>
          </div>
    
            <InfiniteScroll
            dataLength={tv.length}
            next={GetTV}
            hasMore={hasMore}
            loader={<h1>Loading...</h1>}
            >
                <Cards data={tv} />            
            </InfiniteScroll>
    
        </div>
      ) : (<Loading />)

}

export default TvShows
