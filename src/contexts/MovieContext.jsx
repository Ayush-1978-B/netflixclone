import React, { createContext, useContext, useState, useEffect } from 'react';

const MovieContext = createContext();

export function useMovies() {
  return useContext(MovieContext);
}

export function MovieProvider({ children }) {
  const [trending, setTrending] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [popular, setPopular] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_KEY = 'ee5f6d7a5cf13ff7b5c0fb3da6de1136'; // Replace with your TMDB API key
  const BASE_URL = 'https://api.themoviedb.org/3';

  const fetchMovies = async (endpoint) => {
    try {
      const response = await fetch(`${BASE_URL}${endpoint}?api_key=${API_KEY}&language=en-US&page=1`);
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error('Error fetching movies:', error);
      return [];
    }
  };

  const fetchMovieDetails = async (movieId) => {
    try {
      const response = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US&append_to_response=videos,credits,similar`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching movie details:', error);
      return null;
    }
  };

  const searchMovies = async (query) => {
    try {
      const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1`);
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error('Error searching movies:', error);
      return [];
    }
  };

  useEffect(() => {
    const loadMovies = async () => {
      setLoading(true);
      
      const [trendingData, topRatedData, popularData, upcomingData] = await Promise.all([
        fetchMovies('/trending/movie/week'),
        fetchMovies('/movie/top_rated'),
        fetchMovies('/movie/popular'),
        fetchMovies('/movie/upcoming')
      ]);

      setTrending(trendingData);
      setTopRated(topRatedData);
      setPopular(popularData);
      setUpcoming(upcomingData);
      setLoading(false);
    };

    loadMovies();
  }, []);

  const value = {
    trending,
    topRated,
    popular,
    upcoming,
    loading,
    fetchMovieDetails,
    searchMovies
  };

  return (
    <MovieContext.Provider value={value}>
      {children}
    </MovieContext.Provider>
  );
} 