// Typically we wold store in {process.env.API_KEY}
const API_KEY = "09454e1d7127c14e6ec34d2c3b3ec50e";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,

    // fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    // fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    // fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    // fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    // fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    // fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    // fetchMystery: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    // fetchSciFi: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
    // fetchWestern: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
    // fetchAnimation: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
    // fetchTV: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,

  };
  
  export default requests;