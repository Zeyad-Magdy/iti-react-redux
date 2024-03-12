import axios from "axios";
import { useState } from "react";
import { useContext } from "react";
import { MovieContext } from "../contexts/contextMovie";
import { Navigate, useNavigate } from "react-router-dom";

function AddMovie() {
  const  {movieList, setMovieList} = useContext(MovieContext);

  const initialMovieState = {
    id: "",
    title: "",
    backdrop_path: "",
    vote_average: "",
    overview: ""
  };

  const [movie, setMovie] = useState(initialMovieState);
  const navigate = useNavigate();

  const addMovie = (e) => {
    e.preventDefault();
    axios.post("http://localhost:1000/movies", movie).then((response) => {
      setMovieList([...movieList, movie])
    });
    setMovie(initialMovieState); // Reset movie state to empty values
    navigate("/movies");
  };
  
  const setMovieData = (e) => {
    const { name, value } = e.target;
    setMovie(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <form onSubmit={addMovie}>
          <div>
            <label htmlFor="id">id: </label>
            <input
              type="text"
              id="id"
              name="id"
              value={movie.id}
              onChange={setMovieData}
            />
          </div>
          <div>
            <label htmlFor="title">title: </label>
            <input
              type="text"
              id="title"
              name="title"
              value={movie.title}
              onChange={setMovieData}
            />
          </div>
          <div>
            <label htmlFor="backdrop_path">imageURL: </label>
            <input
              type="text"
              id="backdrop_path"
              name="backdrop_path"
              value={movie.backdrop_path}
              onChange={setMovieData}
            />
          </div>
          <div>
            <label htmlFor="vote_average">vote_average: </label>
            <input
              type="text"
              id="vote_average"
              name="vote_average"
              value={movie.vote_average}
              onChange={setMovieData}
            />
          </div>
          <div>
            <label htmlFor="overview">overview: </label>
            <input
              type="text"
              id="overview"
              name="overview"
              value={movie.overview}
              onChange={setMovieData}
            />
          </div>
          <button type="submit">Add Movie</button>
        </form>
      </div>
    </>
  );
}

export default AddMovie;
