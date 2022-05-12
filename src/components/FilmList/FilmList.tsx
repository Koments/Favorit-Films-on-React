import "./FilmList.scss";
import { Link } from "react-router-dom";

//Тип файлов которые приходят с api, логику здесь не описывают
export type Film = {
  title: string;
  poster_path: string;
  release_date: string;
  id: string;
};

interface FilmListProps {
  films: Film[];
}

export function FilmsList({ films }: FilmListProps) {
  return (
    <div>
      <div className="message">
        <h1>Фильмы онлайн Pelisplus</h1>
        <p>
          Pelisplus — идеальный сайт для просмотра фильмов и сериалов онлайн.
          Наша система заботится о том, чтобы иметь новейший кинотеатр в
          качестве Full HD.
        </p>
        <br></br>
        <p>
          Чтобы посмотреть фильм или сериал, вы можете использовать поисковую
          систему вверху или перейти по одной из ссылок жанра или года выпуска в
          левой части сайта, после чего ссылка приведет вас к плееру, где вам
          просто нужно нажать на кнопка воспроизведения Мы приглашаем вас
          поделиться этим замечательным сайтом с друзьями и семьей.
        </p>
      </div>
      <h1>Premieres</h1>
      <div className="card">
        {films.map((film, index) => {
          var selectedYearRelease = film.release_date.slice(0, 4);
          return (
            <div key={index} className="item-picture">
              <Link to={`/SelectedFilm/${film.id}`}>
                <div className="poster-info">
                  <img
                    src={"https://image.tmdb.org/t/p/w500" + film.poster_path}
                    alt="poster"
                    className="poster"
                  />
                  <div className="poster-date">{selectedYearRelease}</div>
                </div>
                <div className="poster-title">{film.title}</div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
