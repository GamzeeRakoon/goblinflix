const API_KEY = "e33a07e9f30acade8032097d47a1997e";

const requests = {
  fetchPopularMovie: `/movie/popular?api_key=${API_KEY}`,
  fetchUpcomingMovie: `/movie/upcoming?api_key=${API_KEY}`,
  fetchTopRatedMovie: `/movie/top_rated?api_key=${API_KEY}`,
  fetchPopularSeries: `/tv/popular?api_key=${API_KEY}`
};

export default requests;
