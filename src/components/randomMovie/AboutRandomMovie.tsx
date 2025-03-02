import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRundomMovie } from "../../store/randomMovieSlice";
import { fetchMovieById } from "../../store/movieSliсe";
import { AppDispatch } from "../../store/store";
import MovieData from "../../types/mainTypes";
import styles from './randomMovie.module.css';
import Rating from "../ui/rating/Rating";
import RandomMovieButtons from "./RandomMovieButtons";

interface RootState {
    movieRandom: {
        data: MovieData | null;
        loading: boolean;
        error: string | null;
    };
    movieById: {
        data: MovieData | null;
        loading: boolean;
        error: string | null;
    };
}

const AboutRandomMovie = ({ buttons, id }: { buttons: boolean, id?: string }) => {
    const dispatch = useDispatch<AppDispatch>();

    const { data: randomMovie, loading: randomLoading, error: randomError } = useSelector(
        (state: RootState) => state.movieRandom || { data: null, loading: false, error: null }
    );
    const { data: selectedMovie, loading: selectedLoading, error: selectedError } = useSelector(
        (state: RootState) => state.movieById || { data: null, loading: false, error: null }
    );

    const [isFetched, setIsFetched] = useState(false);

    useEffect(() => {
        if (id) {
            const movieId = String(id); // Преобразуем id в строку
            dispatch(fetchMovieById(movieId)); // Запрос по id
        } else if (!randomMovie && !isFetched) {
            dispatch(fetchRundomMovie()); // Запрос случайного фильма, если нет id и фильм не был загружен
            setIsFetched(true);
        }
    }, [dispatch, id, randomMovie, isFetched]);

    const movie = id ? selectedMovie : randomMovie;
    const loading = id ? selectedLoading : randomLoading;
    const error = id ? selectedError : randomError;

    const formatTime = (minutes: number): string => {
        const hours = Math.floor(minutes / 60);
        const min = minutes % 60;
        return hours === 0 ? `${min}мин` : `${hours}ч ${min}мин`;
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!movie) return <p>Movie not found</p>;

    return (
        <div className={styles.randomMovie__container}>
            <div className={styles.randomMovie__left}>
                <div className={styles.dopInfo}>
                    <Rating rating={movie.tmdbRating} />
                    <span>{movie.genres ? movie.genres.join(', ') : 'Не указаны жанры'}</span>
                    <span>{movie.releaseYear}</span>
                    <span>{formatTime(movie.runtime)}</span>
                </div>
                <div className={styles.mainInfo}>
                    <h2 className={styles.mainInfo__title}>{movie.title}</h2>
                    <p className={styles.mainInfo__description}>{movie.plot}</p>
                </div>
                <RandomMovieButtons onRefresh={() => dispatch(fetchRundomMovie())} data={movie} buttons={buttons} />
            </div>
            {movie.posterUrl && (
                <div className={styles.randomMovie__right}>
                <img src={movie.posterUrl} alt={movie.title} />
            </div>
            )}
        </div>
    );
};

export default AboutRandomMovie;
