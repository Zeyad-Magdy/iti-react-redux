import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
    const response = await axios.get("http://localhost:7000/movies")
    // console.log(response.data)
    return response.data
})

export const addMovie = createAsyncThunk("movies/addMovie", async (movie) => {
    const response = await axios.post("http://localhost:7000/movies", movie)
    // console.log(response.data)
    return response.data
})

export const toggleFavourite = createAsyncThunk("movies/toggleFav", async (movie) => {
    const response = await axios.put(`http://localhost:7000/movies/${movie.id}`, movie)
    // console.log(response.data)
    return response.data
})


const movieSlice = createSlice({
    name: "movies",
    initialState: { movies: [], counter: 0, favouriteCounter: 0 },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.movies = action.payload
                state.counter = action.payload.length
                action.payload.forEach(element => {
                    element.favorite &&
                        state.favouriteCounter++
                });
            })
            .addCase(addMovie.fulfilled, (state, action) => {
                state.movies.push(action.payload)
                state.counter += 1
            })
            .addCase(toggleFavourite.fulfilled, (state, action) => {
                const index = state.movies.findIndex(movie => movie.id === action.payload.id)
                if (index > -1) {
                    state.movies[index].favorite = action.payload.favorite
                    action.payload.favorite
                        ? state.favouriteCounter++
                        : state.favouriteCounter--
                }
            })
    }

}
)

export default movieSlice.reducer