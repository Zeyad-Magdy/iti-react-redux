import { createSlice } from "@reduxjs/toolkit"

const favouritesSlice = createSlice({
    name: "favourites",
    initialState: { favourites: [], counter: 0 },
    reducers: {
        addFavourite: (state, action) => {
            state.counter += 1;
            state.favourites.push(action.payload);
        },
        removeFavourite: (state, action) => {
            let index = state.favourites.findIndex((movie) => movie.id === action.payload)
            if (index > -1) {
                state.favourites.splice(index, 1)
                state.counter--
            } else {
                console.log("Movie is not present in favourites")
            }
        }
    }
})

export const { addFavourite, removeFavourite } = favouritesSlice.actions
export default favouritesSlice.reducer