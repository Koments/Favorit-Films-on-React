import "./Header.scss";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicket, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export function NavBar() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  function newSearch() {
    dispatch({ type: "showMoviesInSearch", payload: [] });
  }

  return (
    <div className="header">
      <div>
        <Link to="/" className="logo" style={{ textDecoration: "none" }}>
          <FontAwesomeIcon icon={faTicket} size="3x" className="Section-Icon" />
          <div className="site-title">Link</div>
        </Link>
      </div>
      <div className="search-film-container">
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          className="search-film-input"
        />
        <Link to={`/SearchFilms?query=${title}`}>
          <button
            type="submit"
            className="search-film-button"
            onClick={newSearch}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </Link>
      </div>
    </div>
  );
}
