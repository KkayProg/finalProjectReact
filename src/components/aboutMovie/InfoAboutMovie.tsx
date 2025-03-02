import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store/store";
import styles from "./InfoAboutMovie.module.css";
import MovieData from "../../types/mainTypes";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieById } from "../../store/movieSliсe";
import { fetchRundomMovie } from "../../store/randomMovieSlice";

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

const InfoAboutMovie = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { id } = useParams<{ id?: string }>();
    const [isFetched, setIsFetched] = useState(false);

    const { data: randomMovie, loading: randomLoading, error: randomError } = useSelector(
        (state: RootState) => state.movieRandom || { data: null, loading: false, error: null }
    );
    const { data: selectedMovie, loading: selectedLoading, error: selectedError } = useSelector(
        (state: RootState) => state.movieById || { data: null, loading: false, error: null }
    );

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

    const details = [
        { label: "Язык оригинала", value: movie?.language || "Не указано" },
        { label: "Бюджет", value: movie?.budget ? `${movie.budget} $` : "Не указано" },
        { label: "Выручка", value: movie?.revenue ? `${movie.revenue} $` : "Не указано" },
        { label: "Режиссёр", value: movie?.director || "Не указано" },
        { label: "Продакшен", value: movie?.production || "Не указано" },
        { label: "Награды", value: movie?.awardsSummary || "Нет наград" },
    ];

    const formatTime = (minutes: number): string => {
        const hours = Math.floor(minutes / 60);
        const min = minutes % 60;
        return hours === 0 ? `${min}мин` : `${hours}ч ${min}мин`;
    };

    // if (loading) return <p>Загрузка...</p>;
    if (error) return <p>Ошибка: {error}</p>;
    // if (!movie) return <p>Фильм не найден</p>;

    return (
        <div className={styles.infoAboutMovie}>
            <h2 className={styles.infoAboutMovie__title}>О фильме</h2>
            <div className={styles.description}>
                {details.map((item, index) => (
                    <div key={index} className={styles.description__line}>
                        <div className={styles.description__name}>
                            <span className={styles.description__text}>{item.label}</span>
                            <div className={styles.description__border}></div>
                        </div>
                        <span className={styles.description__data}>{item.value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InfoAboutMovie;
