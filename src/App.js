import React, { useEffect, useState } from "react";
import { fetchMovies, fetchCheapestPrice } from "./services/movieService";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const [cheapestPrice, setCheapestPrice] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getMovies() {
      try {
        const data = await fetchMovies();
        setMovies(data);
      } catch (err) {
        setError("Error fetching movies");
      }
    }
    getMovies();
  }, []);

  async function handleMovieClick(cwId, fwId) {
    try {
      setError("");
      setCheapestPrice(null);
      setSelectedMovieId(cwId || fwId);

      const price = await fetchCheapestPrice(cwId, fwId);
      setCheapestPrice(price);
    } catch (err) {
      setError("Error fetching cheapest price");
    }
  }

  return (
    <div className="container">
      <h1 className="main-title">Movie Price Comparison</h1>

      {error && <div className="error-message">{error}</div>}

      <div className="flex-row">
        <div className="column">
          <h2 className="section-title">Movies</h2>
          {movies.map((movie) => (
            <div
              key={movie.title}
              className="movie-item"
              onClick={() => handleMovieClick(movie.cinemaworldId, movie.filmworldId)}
            >
              {movie.title} ({movie.year})
            </div>
          ))}
        </div>

        <div className="column">
          <h2 className="section-title">Cheapest Price</h2>
          <div className="price-panel">
            {selectedMovieId ? (
              <>
                <div>
                  <strong>Selected Movie ID:</strong> {selectedMovieId}
                </div>
                {cheapestPrice !== null ? (
                  <div className="price-label">
                    Cheapest Price: <strong>${cheapestPrice}</strong>
                  </div>
                ) : (
                  <div className="muted">Fetching price...</div>
                )}
              </>
            ) : (
              <div className="muted">
                Click a movie from the list to see its cheapest price.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
