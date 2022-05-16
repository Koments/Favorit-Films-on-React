import "./SelectedFilm.scss";
import { NavBar } from "../Header/Header";

import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Footer } from "../../components/Footer/Footer";

type Genre = {
  id: number;
  name: string;
};

type Film = {
  title: string;
  poster_path: string;
  release_date: string;
  id: string;
  overview: string;
  genres: Genre[];
  runtime: string;
};

type SelectedFilm = {
  oneFilm: Film;
};

export function SelectedFilm() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const selectedFilm = useSelector((state: SelectedFilm) => state.oneFilm);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=70f38a0b17bb6c507ef9e0853610e971`
    )
      .then((response) => response.json())
      .then((films) => dispatch({ type: "showOneFilm", payload: films }));
  }, [dispatch, id]);

  console.log(selectedFilm);

  if (selectedFilm.genres === undefined) {
    return <></>;
  } else {
    var filmYearRelease = selectedFilm.release_date.split("-");
    var genres = selectedFilm.genres.map((genre) => genre.name).join(" ");
    return (
      <div className="container">
        <div className="header">
          <NavBar />
        </div>
        <div className="main">
          <div className="film-info">
            <div className="poster-side">
              <img
                className="poster"
                src={
                  "https://image.tmdb.org/t/p/w500" + selectedFilm.poster_path
                }
                alt=""
              />
            </div>
            <div className="info-film-side">
              <h1 className="title-film">{selectedFilm.title}</h1>
              <span>
                <div className="d-flex description">Release date:</div>
                {filmYearRelease[0]}
              </span>
              <div className="d-flex">
                <div className="description">Genres:</div> {genres}
              </div>
              <div className="description-film-section">
                <div>
                  <div className="description">Runtime</div>
                  {selectedFilm.runtime} min
                </div>
                <div className="description">Overview:</div>
                <div className="description-film-title">
                  {selectedFilm.overview}
                </div>
              </div>
            </div>
          </div>
          <div className="play-film-side">
            {/* <img src="../../../public/playFilm.png" alt="" /> */}
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}
