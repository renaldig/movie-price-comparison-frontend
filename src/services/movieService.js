const BASE_URL = "http://localhost:5194/api";

export async function fetchMovies() {
  const response = await fetch(`${BASE_URL}/movies`);
  if (!response.ok) {
    throw new Error("Failed to fetch movies");
  }
  return response.json();
}

export async function fetchCheapestPrice(cinemaworldId, filmworldId) {
  const response = await fetch(
    `${BASE_URL}/movies/cheapest?cinemaworldId=${cinemaworldId}&filmworldId=${filmworldId}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch cheapest price");
  }
  return response.json();
}
