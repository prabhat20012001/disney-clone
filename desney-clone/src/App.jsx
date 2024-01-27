
import { useEffect } from "react";
import Header from "./components/Header";
import Slider from "./components/Slider";
import GlobalApi from "./services/GlobalApi";

export default function App() {
  useEffect(()=>{
    getTrendingMovies()
  },[])

  const getTrendingMovies=()=>{
    GlobalApi.getTrendingVideos.then(resp=>{
      console.log(resp.data.results)
    })
  }
  return (
    <>
      
      <Header/>
      <Slider/>
    </>
  )
}