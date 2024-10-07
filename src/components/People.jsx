import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Axios from '../utils/Axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from './Loading';
import TopNav from './Partials/TopNav';
import Cards from './Partials/Cards';

function People() {
    const navigate = useNavigate();
    const [category, setCategory] = useState("popular");
    const [people, setPeople] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, sethasMore] = useState(true);
    document.title = "DBP | TV";

    const GetPeople = async () => {
        try {
            const {data} = await Axios.get(`/person/${category}?page=${page}`);
            console.log(data);
            
            if(data.results.length > 0) {
                setPeople((prevState) => [...prevState, ...data.results]);
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
        if(people.length === 0){
            GetPeople();
        }
        else{
            setPage(1);
            setPeople([]);
            GetPeople();
        }
    }
    

    useEffect(() => {
        refreshHandler();
    }, [category])

    return people.length > 0 ? (
        <div className='w-screen h-full p-[3%]'>
          <div className='w-full h-[10vh flex items-center'>
            <Link onClick={() => navigate(-1)}><i className="ri-arrow-left-line text-[#6565CD] font-bold text-2xl mr-3"></i></Link>
            <h1 className='text-3xl text-zinc-400 font-semibold'>People</h1>
            <TopNav />
          </div>
    
            <InfiniteScroll
            dataLength={people.length}
            next={GetPeople}
            hasMore={hasMore}
            loader={<h1>Loading...</h1>}
            >
                <Cards data={people} />            
            </InfiniteScroll>
    
        </div>
      ) : (<Loading />)
}

export default People
