import axios from "axios";

const instance = axios.create({
    // baseURL: 'https://api.themoviedb.org/3/',
    // withCredentials: false,
    // headers:{
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //     'Authorization': process.env.VUE_APP_API_KEY
    // }
    baseURL: "https://api.themoviedb.org/3"
});

export default instance;