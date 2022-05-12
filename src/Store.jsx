import { legacy_createStore as createStore } from "redux";
// Обьединение всех Reducers в приложении

function reducer(
  state = {
    films: [],
    oneFilm: [],
    favorites: [],
    popularFilms: [],
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
    default:
      return state;
  }
}
const store = createStore(reducer);

export default store;
