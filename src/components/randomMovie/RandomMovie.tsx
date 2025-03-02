import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchMovieById } from "../../store/movieSliсe";
import { fetchRundomMovie } from "../../store/randomMovieSlice";
import { AppDispatch } from "../../store/store";
import AboutRandomMovie from "./AboutRandomMovie";
import styles from "./randomMovie.module.css";
import InfoAboutMovie from "../aboutMovie";

const RandomMovie = ({ buttons }: { buttons: boolean }) => {
    const dispatch = useDispatch<AppDispatch>();
    const { id } = useParams<{ id?: string }>();

    useEffect(() => {
        if (id) {
            const movieId = String(id);
            dispatch(fetchMovieById(movieId));
        }
    }, [dispatch, id]);

    return (
        <div className={styles.random__main}>
            <AboutRandomMovie buttons={buttons} id={id} />
        </div>
    );
};

export default RandomMovie;
