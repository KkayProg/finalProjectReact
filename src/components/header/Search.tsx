import { useState } from 'react'
import styles from './Header.module.css'

const Search = () => {
    const [query, setQuery] = useState('');

    return <div className={styles.header__seach}>
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.3589 16.6168L22.6416 20.8995L21.2274 22.3137L16.9447 18.031C15.4048 19.263 13.4519 20 11.3279 20C6.35988 20 2.32788 15.968 2.32788 11C2.32788 6.032 6.35988 2 11.3279 2C16.2959 2 20.3279 6.032 20.3279 11C20.3279 13.124 19.5909 15.0769 18.3589 16.6168ZM16.3526 15.8748C17.5754 14.6146 18.3279 12.8956 18.3279 11C18.3279 7.1325 15.1954 4 11.3279 4C7.46038 4 4.32788 7.1325 4.32788 11C4.32788 14.8675 7.46038 18 11.3279 18C13.2235 18 14.9425 17.2475 16.2027 16.0247L16.3526 15.8748Z" fill="white" fillOpacity="0.5" />
        </svg>

        <input
            className={styles.header__input}
            placeholder='Поиск'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
        />
    </div>
}

export default Search;