import React, { useEffect , useState} from 'react'
import SideNav from './Partials/SideNav';
import TopNav from './Partials/TopNav';
import Axios from '../utils/Axios';
import Header from './Partials/Header';
import HorizontalCards from './Partials/HorizontalCards';
import Dropdown from './Partials/Dropdown';
import Loading from './Loading';

function Home() {
    document.title = "DB | HomePage";

    const [wallpaper, setwallpaper] = useState(null);
    const [trending, setTrending] = useState(null);
    const [category, setCategory] = useState("all");

    const GetHeaderWallpaper = async () => {
        try {
            const {data} = await Axios.get(`/trending/all/day`);
            let randomData = data.results[(Math.random()*data.results.length).toFixed()];
            setwallpaper(randomData);
        } catch (error) {
            console.log("Error: ", error);
        }
    }

    const GetTrending = async () => {
        try {
            const {data} = await Axios.get(`/trending/${category}/day`);
            setTrending(data.results);
        } catch (error) {
            console.log("Error: ", error);
        }
    }
    
    useEffect(()=> {
        !wallpaper && GetHeaderWallpaper();
        GetTrending();
    }, [category])
    
    
  return wallpaper && trending ? (
    <>
        <SideNav />
        <div className='w-[80%] h-full overflow-auto overflow-x-hidden'>
            <TopNav />
            <Header data={wallpaper} />

            <div className='p-5 flex justify-between items-center'>
            <h1 className='text-3xl text-zinc-400 font-bold'>Trending</h1>
            <Dropdown title="Filter" options={["tv", "movie", "all"]} func={(e)=>setCategory(e.target.value)} />
            </div>
            <HorizontalCards data={trending}  />
        </div>
    </>
  ) : (
    <Loading />
  )
}

export default Home
