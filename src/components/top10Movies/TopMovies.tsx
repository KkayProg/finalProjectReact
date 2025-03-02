import { useDispatch, useSelector } from 'react-redux';
import MovieData from '../../types/mainTypes';
import styles from './TopMovies.module.css'
import { AppDispatch } from '../../store/store';
import { useEffect } from 'react';
import { fetchTopMovie } from '../../store/topMovieSlice';
import MovieCard from '../ui/cards';

interface RootState {
    topMovie: {
        data: MovieData[] | null;
        loading: boolean;
        error: string | null;
    };
}

const TopMovies = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { data, loading, error } = useSelector((state: RootState) => state.topMovie);

    useEffect(() => {
        dispatch(fetchTopMovie())
    }, [dispatch]);

    return (
        <div className={styles.topMovies}>
            <h2 className={styles.topMovies__title}>Топ 10 фильмов</h2>
            <div className={styles.topMovies__list}>
                {data ? (
                    data.map((card) => <MovieCard title={card.title} posterUrl={card.posterUrl} key={card.id} id={card.id}/>)
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    )
}

export default TopMovies;