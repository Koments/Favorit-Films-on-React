import "./index.css";
import store from "./Store";
import { App } from "./App";
import { SearchFilms } from "./components/SearchFilms/SearchFilms";
import { SelectedFilm } from "./components/Film/SelectedFilm";

import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
      <Routes>
        <Route path="/SelectedFilm/:id" element={<SelectedFilm />} />
      </Routes>
      <Routes>
        <Route path="/SearchFilms" element={<SearchFilms />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

// Поменять Current на Selected
