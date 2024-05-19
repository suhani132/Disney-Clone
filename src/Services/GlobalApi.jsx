import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3"
const api_Key = " 242da9ca57b0175492a979f39dbd4a2d "
// https://api.themoviedb.org/3/trending/all/day?api_key=242da9ca57b0175492a979f39dbd4a2d
const  getTrendingVideos = axios.get(this.movieBaseUrl+"/trending/all/day?api_key"+api_Key)

export default {
    getTrendingVideos
}