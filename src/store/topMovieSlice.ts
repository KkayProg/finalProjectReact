import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import MovieData from "../types/mainTypes";

interface MovieState {
    data: MovieData[] | null;
    loading: boolean;
    error: string | null;
}

const initialState: MovieState = {
    data: null,
    loading: false,
    error: null,
}

export const fetchTopMovie = createAsyncThunk<MovieData[]>(
    'movie/fetchTopMovie',
    async () => {
        const response = await axios.get('https://cinemaguide.skillbox.cc/movie/top10');
        return response.data;
    }
);

const topMovieSlice = createSlice({
    name: 'topMovie',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTopMovie.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchTopMovie.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchTopMovie.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to load movie';
            });
    },
})

export default topMovieSlice.reducer;