// import React from "react";

// function AddMoviesPage() {
//   return <div>AddMoviesPage</div>;
// }

// export default AddMoviesPage;

///
import { Box, Typography } from "@mui/material";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import { moviesContext } from "../Contexts/MoviesContextProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addMovie } from "../redux/store/movies";
export default function AddMoviesPage() {
  const [movie, setNewMovie] = React.useState({
    title: "",
    vote_average: "",
    poster_path: "",
    overview: "",
  });
  const { moviesArr, setMovies } = React.useContext(moviesContext);
  const navigate = useNavigate();
  const handleOnChange = (e) => {
    const tagName = e.target.name;
    setNewMovie((prev) => ({ ...prev, [tagName]: e.target.value }));
  };
  const dispatch = useDispatch();
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(movie);
    // addMovie(movie);

    dispatch(addMovie(movie))
    // setMovies([...moviesArr, movie]);
    navigate("/");
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h5">Add A New Movie</Typography>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        onSubmit={handleOnSubmit}
      >
        <TextField
          style={{ width: "100%", margin: "5px" }}
          type="text"
          label="Name"
          variant="outlined"
          name="title"
          onChange={handleOnChange}
        />
        <br />
        <TextField
          style={{ width: "100%", margin: "5px" }}
          type="text"
          label="Rating"
          variant="outlined"
          name="vote_average"
          onChange={handleOnChange}
        />
        <br />
        <TextField
          style={{ width: "100%", margin: "5px" }}
          type="text"
          label="Image URL"
          variant="outlined"
          name="poster_path"
          onChange={handleOnChange}
        />
        <br />
        <TextField
          style={{ width: "100%", margin: "5px" }}
          type="text"
          label="Overview"
          variant="outlined"
          name="overview"
          onChange={handleOnChange}
        />
        <br />

        <Button variant="contained" color="primary" type="submit">
          save
        </Button>
      </form>
    </Box>
  );
}
