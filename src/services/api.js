// BASE DA API : https://api.themoviedb.org/3/
//API DA URL: https://api.themoviedb.org/3/movie/now_playing?api_key=da40b6e135ed3e0b770fd2693a08bf58

import axios from "axios";

const api =axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});
export default api;

