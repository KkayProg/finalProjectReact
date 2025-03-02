import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";

const MovieCard = ({ title, posterUrl, id }: { title: string; posterUrl: string; id: number }) => {
    return (
        <Link to={`/about-movie/${id}`} className={styles.movieCard}>
            {posterUrl ? (
            <img src={posterUrl} alt={title} />
            ) : (
                <div className={styles.noImage}>
                    {title}
                </div>
            )}
        </Link >
    );
};

export default MovieCard;