import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css'

const Navigation = () => {
    const location = useLocation();

    return <div>
        <nav className={styles.nav}>
            <Link to="/"
                className={location.pathname === '/' || location.pathname.startsWith('/about-movie') ? styles.active : ''}
            >Главная</Link>
            <Link to="/genres"
                className={location.pathname === '/genres' ? styles.active : ''}
            >Жанры</Link>
        </nav>
    </div>
}

export default Navigation;