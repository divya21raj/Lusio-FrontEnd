import axios from 'axios'; 

/** base url to make requests to the the movie database */
const instance = axios.create({
  baseURL: "https://069b803d.ngrok.io"
});

export default instance; 