import axios from "axios";


const getTrendingVideos=axios.get("https://api.themoviedb.org/3/discover/movie?api_key=913ab98c4c1053e3e2c3517218bc33a9")

export default{
    getTrendingVideos
}

// https://api.themoviedb.org/3/discover/movie?api_key=913ab98c4c1053e3e2c3517218bc33a9