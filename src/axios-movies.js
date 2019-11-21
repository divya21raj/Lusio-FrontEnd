import axios from 'axios'; 

/** base url to make requests to the the movie database */
const instance = axios.create({
  baseURL: "http://10.6.14.86:3000"
});

export default instance; 