
import React, { useContext, useEffect, useState } from "react";
import OneMovie from "./OneMovie";
import { MovieContext } from "../contexts/contextMovie";

function Movies() {
  const [loading, setLoading] = useState(true);
  const {movieList} = useContext(MovieContext)
  useEffect(() => {
    if(movieList) {
      setLoading(false);
    }
    // axios
    //   .get("https://api.themoviedb.org/3/discover/movie", {
    //     params: {
    //       sort_by: "popularity.desc",
    //       api_key: "9813ce01a72ca1bd2ae25f091898b1c7",
    //     },
    //   })
    //   .then((response) => {
    //     setMovies(response.data.results);
    //     console.log(response.data.results);
    //     setLoading(false);
    //   })
    //   .catch((err) => {
    //     setLoading(false);
    //     console.log(err);
    //   });

  }, [movieList]); // empty dependency array means this effect will only run once (component mount)

  if (loading) {
    return (
      <div>
        <h1>loading...</h1>
      </div>
    );
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          minWidth: "1000px",
          justifyContent: "center",
        }}
      >
        {movieList.map((movie) => {
          return <OneMovie key={movie.id} movie={movie}></OneMovie>;
        })}
      </div>
    </>
  );
}

export default Movies;
