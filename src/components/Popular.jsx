import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Axios from '../utils/Axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from './Loading';
import TopNav from './Partials/TopNav';
import Dropdown from './Partials/Dropdown';
import Cards from './Partials/Cards';

function Popular() {
  const navigate = useNavigate();
    const [category, setCategory] = useState("movie");
    const [popular, setPopular] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, sethasMore] = useState(true);
    document.title = "DBP | Popular";

    const GetPopular = async () => {
        try {
            const {data} = await Axios.get(`${category}/popular?page=${page}`);
            console.log(data);
            
            if(data.results.length > 0) {
                setPopular((prevState) => [...prevState, ...data.results]);
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
        if(popular.length === 0){
            GetPopular();
        }
        else{
            setPage(1);
            setPopular([]);
            GetPopular();
        }
    }
    

    useEffect(() => {
        refreshHandler();
    }, [category])
  return popular.length > 0 ? (
    <div className='w-screen h-full p-[3%]'>
      <div className='w-full h-[10vh flex items-center'>
        <Link onClick={() => navigate(-1)}><i className="ri-arrow-left-line text-[#6565CD] font-bold text-2xl mr-3"></i></Link>
        <h1 className='text-3xl text-zinc-400 font-semibold'>Popular</h1>
        <TopNav />
        <Dropdown title="Category" options={["movie", "tv"]} func={(e) => setCategory(e.target.value)} />
        <div className='w-[4%]'></div>
      </div>

        <InfiniteScroll
        dataLength={popular.length}
        next={GetPopular}
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}
        >
            <Cards data={popular} />            
        </InfiniteScroll>

    </div>
  ) : (<Loading />)
}

export default Popular
