import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const MovieContext = createContext();
const MovieContextProvider = ({ children }) => {
  const [movieList,  setMovieList] = useState([]);
  
  // Get movie list 
  useEffect(()=>{
    axios
      .get("http://localhost:1000/movies")
      .then((response) => {
        setMovieList(response.data);
      })
      .catch((err) => console.log(err));
  },[])

    return (
        <>
            <MovieContext.Provider value={{movieList, setMovieList}}>
                {children}
            </MovieContext.Provider>
        </>
    )
};
export default MovieContextProvider;