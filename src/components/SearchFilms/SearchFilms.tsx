import "../../App.scss";
import { NavBar } from "../Header/Header";
import { TopRatedFilms } from "../TopRatedFilms/TopRatedFilms";
import { SearchByYearRelease } from "../SearchByYearRelease/SearchByYearRelease";

import { Key, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function getQuery() {
  const params = new URLSearchParams(window.location.search);
  return params.get("query");
}

type FilmsElements = {
  poster_path: string;
  title: string;
  release_date: string;
  map: Function;
};

export function SearchFilms() {
  const searchListFilms = useSelector((state: any) => state.searchFilms);
  const dispatch = useDispatch();
  var query = getQuery();

  async function SearchFilm() {
    const response = await fetch(
      // `https://api.themoviedb.org/3/search/movie?api_key=70f38a0b17bb6c507ef9e0853610e971&language=en-US&query=${query}&page=2&include_adult=true&year=2022`
      `https://api.themoviedb.org/3/search/movie?api_key=70f38a0b17bb6c507ef9e0853610e971&language=en-US&query=${query}`
    );
    const searchResult = await response.json();
    return searchResult;
  }
  console.log(query);
  useEffect(() => {
    SearchFilm().then((movies: any) => {
      const films = movies.results as FilmsElements[];
      console.log(films);
      dispatch({ type: "showMoviesInSearch", payload: films });
    });
  }, [dispatch, query]);

  console.log(searchListFilms);
  if (searchListFilms === undefined || searchListFilms.length == 0) {
    return (
      <div className="container">
        <div className="header">
          <NavBar />
        </div>
        <div className="main">
          <div className="main-left pull-left">
            <h3>Top Rated Films: </h3>
            <div>
              <TopRatedFilms />
            </div>
            <div>
              <SearchByYearRelease />
            </div>
          </div>
          <div className="main-right">
            <div>
              Search result:
              <h2>No matches</h2>
              <div className="card"></div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="header">
          <NavBar />
        </div>
        <div className="main">
          <div className="main-left pull-left">
            <h3>Top Rated Films: </h3>
            <div>
              <TopRatedFilms />
            </div>
            <div>
              <SearchByYearRelease />
            </div>
          </div>
          <div className="main-right">
            <div>
              Search result:
              <div className="card">
                {searchListFilms.map((film: any, index: Key) => {
                  var selectedYearRelease = film.release_date.slice(0, 4);
                  if (film.poster_path === null) {
                    return (
                      <div key={index} className="item-picture">
                        <Link to={`/SelectedFilm/${film.id}`}>
                          <div className="withoutPoster ">
                            <div className="poster-date">
                              {selectedYearRelease}
                            </div>
                          </div>
                          <div className="poster-title">{film.title}</div>
                        </Link>
                      </div>
                    );
                  } else {
                    return (
                      <div key={index} className="item-picture">
                        <Link to={`/SelectedFilm/${film.id}`}>
                          <div className="poster-info">
                            <img
                              src={
                                "https://image.tmdb.org/t/p/w500" +
                                film.poster_path
                              }
                              alt="poster"
                              className="poster"
                            />
                            <div className="poster-date">
                              {selectedYearRelease}
                            </div>
                          </div>
                          <div className="poster-title">{film.title}</div>
                        </Link>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
