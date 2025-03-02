import { configureStore } from "@reduxjs/toolkit";
import randomMovieReducer from './randomMovieSlice';
import topMovieReducer from './topMovieSlice';
import movieSlice from './movieSliсe';

const store = configureStore({
    reducer: {
        movieRandom: randomMovieReducer,
        topMovie: topMovieReducer,
        movieById: movieSlice,
    }
})

export type AppDispatch = typeof store.dispatch;
export default store;