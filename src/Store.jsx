import { legacy_createStore as createStore } from "redux";
// Обьединение всех Reducers в приложении

function reducer(
  state = {
    films: [],
    oneFilm: [],
    favorites: [],
    popularFilms: [],
    searchResultFilms: [],
    showMoviesInSearch: [],
    search: "",
  },
  action
) {
  switch (action.type) {
    case "updateFilms": {
      return { ...state, films: action.payload };
    }
    case "showOneFilm": {
      return { ...state, oneFilm: action.payload };
    }
    case "showPopularFilms": {
      return { ...state, popularFilms: action.payload };
    }
    case "showMoviesInSearch": {
      return { ...state, searchFilms: action.payload };
    }
    case "newSearch": {
      return { ...state, newSearch: action.payload };
    }
    default:
      return state;
  }
}
const store = createStore(reducer);

export default store;
