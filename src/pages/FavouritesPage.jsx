import { useContext } from "react"
import { useSelector } from "react-redux"
import Movie from "../Components/Movie"


function FavouritesPage() {

  const allmovies = useSelector(state=>state.movies.movies)
  const counter = useSelector(state=>state.movies.favouriteCounter)



  return (
    <>
    <div>
      <h2>Favourite Movies: {counter}</h2>
    </div>
    <br/>
      {allmovies.map((movie) => (
        movie.favorite &&
        <Movie movie={movie} key={movie.id}></Movie>
      ))}
    </>
  )
}

export default FavouritesPage