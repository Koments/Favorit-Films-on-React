import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import store from "./Store";
import { App } from "./App";
import { SelectedFilm } from "./components/Film/SelectedFilm";

import "./index.css";

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
    </BrowserRouter>
  </Provider>
);

// Поменять Current на Selected
