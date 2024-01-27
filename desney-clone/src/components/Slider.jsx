import React, { useState,useEffect } from 'react'
import GlobalApi from '../services/GlobalApi';
import { HiChevronLeft } from 'react-icons/hi2';
const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original"
function Slider() {
  const [movieList,setMovieLIst]=useState([])
  useEffect(()=>{
    getTrendingMovies()
  },[])

  const getTrendingMovies=()=>{
    GlobalApi.getTrendingVideos.then(resp=>{
      console.log(resp.data.results)
      setMovieLIst(resp.data.results)
    })
  }
  return (
    <div>
      <HiChevronLeft className="hideen md:block text-[30px] absolute text-white mx-8 mt-[150px] cursor-pointer"/>
      <HiChevronLeft className=" hidden md:block text-[30px] absolute mx-8 mt-[150px] text-white cursor-pointer right-0"/>
    <div className='flex overflow-x-auto scrollbar-none  w-full px-16 py-4'>
   {movieList.map((item,index)=>(
    <img src={IMAGE_BASE_URL+item.backdrop_path} className='min-w-full  md:h-[310px] object-cover object-left-top mr-5 rounded-md'/>
   ))}

 


      
    </div>
    </div>
  )
}

export default Slider