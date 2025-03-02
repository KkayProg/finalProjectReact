import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import MovieData from "../types/mainTypes";
import axios from "axios";

interface MovieState {
    data: MovieData | null;
    loading: boolean;
    error: string | null;
}

const initialState: MovieState = {
    data: null,
    loading: false,
    error: null,
}

export const fetchRundomMovie = createAsyncThunk('movie/fetcRandomhMovie', async () => {
    const response = await axios.get('https://cinemaguide.skillbox.cc/movie/random');
    return response.data;
});

const randomMovieSlice = createSlice({
    name: 'movieRandom',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRundomMovie.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchRundomMovie.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchRundomMovie.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to load movie';
            });
    },
});

export default randomMovieSlice.reducer;