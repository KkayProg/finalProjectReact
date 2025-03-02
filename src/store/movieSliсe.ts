import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import MovieData from "../types/mainTypes";

export const fetchMovieById = createAsyncThunk<MovieData, string>(
    "movie/fetchMovieById",
    async (id) => {
        const response = await axios.get(`https://cinemaguide.skillbox.cc/movie/${id}`);
        return response.data;
    }
);

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        data: null as MovieData | null,
        loading: false,
        error: null as string | null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovieById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMovieById.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchMovieById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Ошибка загрузки фильма";
            });
    },
});

export default movieSlice.reducer;
