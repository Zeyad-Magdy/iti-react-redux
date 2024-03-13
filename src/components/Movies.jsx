import axios from "axios";
import Movie from "./Movie";
import React, { Component, useContext, useEffect, useState } from "react";
import { moviesContext } from "../Contexts/MoviesContextProvider";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";


function Movies() {
  // const { moviesArr, setMovies } = useContext(moviesContext);
  const allMovies = useSelector(state=>state.movies.movies)
  const counter = useSelector(state=>state.movies.counter)

  if (!allMovies) return <div>Loading....</div>;
  return (
    <>
    <Box>
      <h2>Movies Counter: {counter}</h2>
    </Box>
    <br/>
      {allMovies.map((movie) => (
        <Movie movie={movie} key={movie.id}></Movie>
      ))}
    </>
  );
}

export default Movies;
