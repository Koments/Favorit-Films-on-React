import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

type listFilms = {
  title: string;
  poster_path: string;
  id: string;
};

type PopularFilms = {
  popularFilms: listFilms[];
};

export function TopRatedFilms() {
  var dispatch = useDispatch();
  const listFilms = useSelector((state: PopularFilms) => state.popularFilms);

  async function topRatedFilms() {
    const response = await fetch(
      
      " https://api.themoviedb.org/3/movie/top_rated?api_key=70f38a0b17bb6c507ef9e0853610e971&language=en-US&page=1"
    );
    const movies = await response.json();
    return movies;
  }

  useEffect(() => {
    topRatedFilms().then((mopularFilms) => {
      const popularFilms = mopularFilms.results as PopularFilms;
      dispatch({ type: "showPopularFilms", payload: popularFilms });
    });
  }, [dispatch]);

  var num = 0;

  return (
    <>
      <ul className="top-rated-movies-list">
        {listFilms.map((movie: any, index) => {
          num += 1;
          if (num <= 8) {
            return (
              <li key={index} className="pull-left top-rated-movies ">
                <Link to={`/SelectedFilm/${movie.id}`}>
                  <div className="cover pull-left">
                    <img
                      className="top-rate-film"
                      src={
                        "https://image.tmdb.org/t/p/w500" + movie.poster_path
                      }
                      alt=""
                    />
                  </div>
                  <div>
                    <p>{movie.title}</p>
                    <p>{movie.release_date}</p>
                  </div>
                </Link>
              </li>
            );
          }
        })}
      </ul>
    </>
  );
}
