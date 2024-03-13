import axios from "axios";
import React, { createContext, useCallback, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

export const moviesContext = createContext();
const MoviesContextProvider = ({ children }) => {
  let [moviesArr, setMovies] = useState([]);
  const addMovie = (newMovie) => {
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", newMovie);
    // setMovies([...moviesArr, { ...newMovie }]);
    axios.post("http://localhost:7000/movies", newMovie).then((res) => {
      setMovies([...moviesArr, { ...newMovie }]);
      console.log(res.data);
    });
  };
  useEffect(() => {
    axios.get("http://localhost:7000/movies").then((res) => {
      setMovies(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <moviesContext.Provider value={{ moviesArr, setMovies, addMovie }}>
      {children}
    </moviesContext.Provider>
  );
};

export default MoviesContextProvider;
