import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Movies from "./Components/Movies";
import MoviesPage from "./Pages/MoviesPage";
import UsersPage from "./Pages/AddMoviesPage";
import AboutPage from "./Pages/AboutPage";
import NotFoundPage from "./Pages/NotFoundPage";
import NavBar from "./Components/NavBar";
import AddMoviesPage from "./Pages/AddMoviesPage";
import MoviesContextProvider from "./Contexts/MoviesContextProvider";
import FavouritesPage from "./Pages/FavouritesPage";
import { Provider, useDispatch } from "react-redux";
import store from "./redux/store/store";
import { useEffect } from "react";
import { fetchMovies } from "./redux/store/movies";

function App() {



  return (
    <div>
      <Provider store={store}>
        <MoviesContextProvider>
          <BrowserRouter>
            <NavBar>
              <Routes>
                <Route path="/" element={<MoviesPage></MoviesPage>}></Route>
                <Route
                  path="/add"
                  element={<AddMoviesPage></AddMoviesPage>}
                ></Route>
                <Route
                  path="/favourites"
                  element={<FavouritesPage></FavouritesPage>}
                ></Route>
                <Route path="/about" element={<AboutPage></AboutPage>}></Route>
                <Route path="/*" element={<NotFoundPage></NotFoundPage>}></Route>
              </Routes>
            </NavBar>
          </BrowserRouter>
        </MoviesContextProvider>
      </Provider>
    </div>
  );
}

export default App;
