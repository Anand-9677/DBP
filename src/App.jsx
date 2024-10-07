import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Trending from './components/Trending'
import Popular from './components/Popular'
import Movie from './components/Movie'
import TvShows from './components/TvShows'
import People from './components/People'
import AboutUs from './components/AboutUs'
import Contact from './components/Contact'


function App() {
  return (
    <div className='bg-[#1F1E24] w-full h-full flex overflow-hidden'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/trending' element={<Trending />} />
        <Route path='/popular' element={<Popular />} />
        <Route path='/movies' element={<Movie /> } />
        <Route path='/tvshows' element={<TvShows />} />
        <Route path='/people' element={<People />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
