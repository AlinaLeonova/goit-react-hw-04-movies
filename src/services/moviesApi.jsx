import axios from "axios"


const apiKey = "2d536748299a0654176fee96f4763797"

export const fetchTrending = () => {
  console.log("moviesApi.fetchTrending")
  return axios
    .get(`https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`)
    .then((res) => res.data.results)
}

export const fetchWithSearchQuery = (searchQuery) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchQuery}&page=1&include_adult=false`
    )
    .then((res) => res.data.results)
}

export const fetchMovieDetails = (movieId) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`
    )
    .then((res) => res.data)
}

export const fetchMovieCast = (movieId) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}&language=en-US`
    )
    .then((res) => res.data.cast)
}

export const fetchMovieReviews = (movieId) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${apiKey}&language=en-US&page=1`
    )
    .then((res) => res.data.results)
}
