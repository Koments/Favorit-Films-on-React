import "./App.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Film, FilmsList } from "./components/FilmList/FilmList";
import { NavBar } from "./components/Header/Header";
import { TopRatedFilms } from "./components/TopRatedFilms/TopRatedFilms";
import { SearchByYearRelease } from "./components/SearchByYearRelease/SearchByYearRelease";
import { Footer } from "./components/Footer/Footer";

export function App() {
  const filmsList = useSelector((state: any) => state.films);
  const dispatch = useDispatch();

  async function fetchMoviesJSON() {
    const response = await fetch(
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=70f38a0b17bb6c507ef9e0853610e971"
    );
    const movies = await response.json();
    return movies;
  }

  useEffect(() => {
    fetchMoviesJSON().then((movies: any) => {
      const films = movies.results as Film[];
      dispatch({ type: "updateFilms", payload: films });
    });
  }, [dispatch]);

  return (
    <>
      <div className="container">
        <div className="header">
          <NavBar />
        </div>
        <div className="main">
          <div className="main-left pull-left">
            <h2>Top Rated Films: </h2>
            <div className="top-rated-movies-list">
              <TopRatedFilms />
            </div>
            <h2> Release Year:</h2>
            <div className="years-release">
              <SearchByYearRelease />
            </div>
          </div>
          <div className="main-right">
            <FilmsList films={filmsList} />
          </div>
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}
