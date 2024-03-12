import React from "react";

function OneMovie({ movie }) {
  return (
    <>
      <div
        className="movie"
        style={{
          backgroundColor: "#046eb0",
          maxWidth: "350px",
          padding: "10px",
          borderRadius: "10px",
          color: "#fff",
          margin: "10px"
        }}
      >
        <p style={{fontSize: "22px", fontFamily:"sans-serif"}}>{movie.title}</p>
        <p>{movie.vote_average}</p>
        <img
          src={`http://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
          alt={movie.title}
          style={{ width: "100%", height: "auto", display: "block" }}
        />
        <p>{movie.id}</p>
        <p style={{fontSize: "12px"}}>{movie.overview}</p>
      </div>
    </>
  );
}

export default OneMovie;
