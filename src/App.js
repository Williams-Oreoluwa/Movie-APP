import React, { useState, useEffect } from "react";

import MovieCard from "./movies";
import SearchIcon from "./search.svg";
import "./index.css";

const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies('avengers');
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
    setMovies(data.Search);
  };

  if (movies.length <= 0) {
    return (
      <div className="empty">
        <h2>No movies found</h2>
      </div>
    );
  }

  return (
    <div className="app">
      <h1>Classic Movies</h1>

      <div className="search">
        <input
          type="text"
          placeholder="Search for any movie"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img src={SearchIcon} alt="search" onClick={() => searchMovies(searchTerm)} />
      </div>

      <div className="container">
        {movies.map((movie) => {
          return (
            <>
              <MovieCard movie={movie} />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default App;
