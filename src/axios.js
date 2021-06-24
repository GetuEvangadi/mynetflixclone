import axios from 'axios';

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
  });
  // instance.get("/foo-bar");
  
  export default instance;
  


  //https://api.themoviedb.org/3/movie/550?api_key=e050a8ff739c767c62033c206a0dc3b9