import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar";
import About from "../pages/About";
import MoviesPage from "../pages/MoviesPage";
import AddMoviePage from "../pages/AddMoviePage";
import NotFound from "../pages/NotFound";
import MovieContextProvider from "../contexts/contextMovie";

function App() {
  return (
    <>
      <MovieContextProvider>
        <BrowserRouter>
          <NavBar></NavBar>
          <Routes>
            <Route path="/" element={<MoviesPage></MoviesPage>}></Route>
            <Route path="movies" element={<MoviesPage></MoviesPage>}></Route>
            <Route path="about" element={<About></About>}></Route>
            <Route
              path="movies/add"
              element={<AddMoviePage></AddMoviePage>}
            ></Route>
            <Route path="*" element={<NotFound></NotFound>}></Route>
          </Routes>
        </BrowserRouter>
      </MovieContextProvider>
    </>
  );
}

export default App;
