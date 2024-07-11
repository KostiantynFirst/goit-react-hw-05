import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const MOVIEKEY = process.env.API_KEY;

export const getTrendingMovies = async () => {

  try {
    const res = await axios.get(
      `trending/movie/day?`, {
          params: {
              api_key: MOVIEKEY,
          }
      }
    );
   return res;
  } catch (error) {
    console.log('error', error);
  }
}

export const getMoviesInfo = async (movieId) => {
  try {
    const res = await axios.get(`movie/${movieId}`, {
      params: {
        api_key: MOVIEKEY,
      }
    });
    return res;
  
  } catch (error) {
    console.log('error', error);
}
}

export const getMovieSearch = async (search) => {
  try {
    const res = await axios.get(`search/movie`, {
      params: {
        api_key: MOVIEKEY,
        language: 'en-US',
        query: search,
        include_adult: false,
        page: 1,
      },
    });
    return res;
    
  } catch (error) {
      console.log('error', error);
  }
}

export const getCast = async (movieId) => {
  try {
    const res = await axios.get(`movie/${movieId}/credits`, {
      params: {
        api_key: MOVIEKEY,
        language: 'en-US',
      },
    });
    return res.data.cast;
  } catch (error) {
    console.log('error', error);
  }
}

export const getReviews = async (movieId) => {
  try {
    const res = await axios.get(`movie/${movieId}/reviews`, {
      params: {
        api_key: MOVIEKEY,
        language: 'en-US',
        page: 1,
      }
    });
    return res;
  } catch (error) {
    console.log('error', error);
  }
}